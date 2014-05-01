% xapi-data-statement epub
% Tyler Mulligan
% April 24, 2014

This is a special book that was generated from markdown using [pandoc](http://johnmacfarlane.net/pandoc/). It uses external javascript files that evaluate data-xapi-statement attributes that contain xAPI statements.

<a id="send-statement" data-xapi-statement='{"actor":{"mbox":"mailto:tyler.mulligan.ctr@adlnet.gov","name":"Tyler Mulligan","objectType":"Agent"},"verb":{"id":"http://adlnet.gov/expapi/verbs/shared","display":{"en-US":"shared"}},"object":{"id":"http://z2.vc/xapi/activities/shared-from-md-epub","objectType":"Activity","definition":{"name":{"en-US":"HTML5 data attribute from an epub"},"description":{"en-US":"A shared activity using an HTML5 data-xapi-statement attribute sent from an epub that was generated with pandoc using markdown"}}}}' href="#">click to send a <em>shared</em> statement to the ADL LRS</a>
<h2>Statement Response</h2>
<pre id="statement-response"></pre>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
<script type="text/javascript" src="http://z2.vc/xapi/html5-data-attributes/js/xapiwrapper.min.js"></script>
<script type="text/javascript">
	$(function(){
		// apply default LRS config
		ADL.XAPIWrapper.changeConfig({
		  "endpoint" : "https://lrs.adlnet.gov/xapi/",
		  "user" : "ebook",
		  "password" : "ebooklrs"
		});
		$('#send-statement').click(function (e) {
			e.preventDefault();

			// don't get crazy with the sizzle
			var $el = $(this);
			
			// get the xapi-statement from the data atrribute
			var stmt = $el.attr('data-xapi-statement');
			var xstmt = $.parseJSON(stmt);

			ADL.XAPIWrapper.sendStatement(xstmt, function(resp, obj) {
				$("#statement-response").html(resp.status + ": " + obj.id);
			});
		});
	});
</script>

<h2>What?</h2>

You can view the statement on the [ADL LRS Statement Viewer](https://lrs.adlnet.gov/prototypes/StatementViewer/index.html)

A technical explaination follows in the chapters below.

# The HTML

The HTML contains JSON inline

```
<a id="send-statement" data-xapi-statement='{"actor":{"mbox":"mailto:tyler.mulligan.ctr@adlnet.gov","name":"Tyler Mulligan","objectType":"Agent"},"verb":{"id":"http://adlnet.gov/expapi/verbs/shared","display":{"en-US":"shared"}},"object":{"id":"http://z2.vc/xapi/activities/shared-from-md-epub","objectType":"Activity","definition":{"name":{"en-US":"HTML5 data attribute from an epub"},"description":{"en-US":"A shared activity using an HTML5 data-xapi-statement attribute sent from an epub that was generated with pandoc using markdown"}}}}' href="#">click to send a <em>shared<em> statement to the ADL LRS</a>
```

Beautified, the JSON is more readable

```
{
    "actor": {
        "mbox": "mailto:tyler.mulligan.ctr@adlnet.gov",
        "name": "Tyler Mulligan",
        "objectType": "Agent"
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/shared",
        "display": {
            "en-US": "shared"
        }
    },
    "object": {
        "id": "http://z2.vc/xapi/activities/shared-from-md-epub",
        "objectType": "Activity",
        "definition": {
            "name": {
                "en-US": "HTML5 data attribute from an epub"
            },
            "description": {
                "en-US": "A shared activity using an HTML5 data-xapi-statement attribute sent from an epub that was generated with pandoc using markdown"
            }
        }
    }
}
```

# The Magical javascript

```
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
<script type="text/javascript" src="http://z2.vc/xapi/html5-data-attributes/js/xapiwrapper.min.js"></script>
<script type="text/javascript">
	$(function(){
		// apply default LRS config
		ADL.XAPIWrapper.changeConfig({
		  "endpoint" : "https://lrs.adlnet.gov/xapi/",
		  "user" : "ebook",
		  "password" : "ebooklrs"
		});
		$('#send-statement').click(function (e) {
			e.preventDefault();

			// don't get crazy with the sizzle
			var $el = $(this);
			
			// get the xapi-statement from the data atrribute
			var stmt = $el.attr('data-xapi-statement');
			var xstmt = $.parseJSON(stmt);

			ADL.XAPIWrapper.sendStatement(xstmt, function(resp, obj) {
				$("#statement-response").html(resp.status + ": " + obj.id);
			});
		});
	});
</script>
```

# Generate Your Own

```
wget http://z2.vc/xapi/html5-data-attributes/xapi-data-book.md
pandoc -S xapi-data-book.md -o xapi-data-book.epub
```
