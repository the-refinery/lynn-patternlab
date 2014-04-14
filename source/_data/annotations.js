var comments = {
"comments" : [
	{
		"el": "header[role=banner]",
		"title": "Masthead",
		"comment": "<p>The main header of the site doesn't take up too much screen real estate in order to allow the user to quickly focus on the core content.</p>"
	},
	{
		"el": ".site-logo",
		"title": "Logo",
		"comment": "<p>The logo image uses a combination of plain text and CSS image replacement to ensure some form of the site title is clickable, even if CSS or images are off.</p><p>The image replacement works by placing an empty span within an element with a class=\"image-replace\" with CSS defining the image on the span, such as:<br />&lt;div class=\"image-replace\"&gt;&lt;span&gt;&lt;/span&gt;Fallback text&lt;/div&gt;</p>"
	},
	{
		"el": ".search-form",
		"title" : "Search",
		"comment": "<p>Search is an incredibly important priority, especially for mobile. It is a great idea to give users the ability to jump directly to what they are looking for without forcing them to wade through your site's navigation.</p><p>We're also using the <a href=\"http://dev.w3.org/html5/markup/input.search.html\">HTML5 search input type</a>, which is great for mobile devices that can <a href=\"http://diveintohtml5.info/forms.html\">bring up the appropriate virtual keyboard</a> for many smartphones.</p>"
	},
	{
		"el": "nav.nav-main",
		"title" : "Navigation",
		"comment": "<p>Navigation for adaptive web experiences can be tricky. Top navigations are typical on desktop sites, but mobile screen sizes don't give us the luxury of space. We're dealing with this situation by collapsing the navigation behind a button for smaller screen sizes. This is only done if a certain level of javascript is supported, otherwise the full navigation is accessible at the bottom of the page.</p><p>This is just one method. <a href=\"http://bagcheck.com/\">Bagcheck</a> and <a href=\"http://contentsmagazine.com/\">Contents Magazine</a> add an anchor in the header that jumps users to the navigation which is placed in the footer. This solution works well because it doesn't require any Javascript in order to work. Other methods exist too. For example, <a href=\"http://m.espn.com\">ESPN's mobile navigation</a> overlays the main content of the page.</p>"
	},

    
    {
		"el": ".article-header h1",
		"title" : "Article Header",
		"comment": "<p>The article header should be no more than 140 characters. </p>"
	},

	{
        "el": "time",
        "title": "Time",
        "comment": "<p>Dates and times can be difficult for machines to understand. To make dates unambiguous, use the time tag along with the datetime attribute. The value of the datetime attribute is the date specified using the <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date/time standard</a>.</p>"
    },
    {
    	"el": ".pulledquote",
    	"title": "Pullquote",
    	"comment": "<p>To avoid content duplication, use the magic of javascript to create a pullquote by wrapping the text to be quoted in the following tag:<br /> &lt;span class=\"pullquote\"&gt;&hellip;&lt;\span&gt;</p><p>Or create the pulledquote tag manually:<br />&lt;span class=\"pulledquote <em>position</em>\"&gt;&hellip;&lt;\span&gt;"
    },

	/*{
		"el": "",
		"title": "",
		"comment": ""
	},*/












	
	
	
	{
		"el": ".block-hero",
		"title" : "Hero",
		"comment": "<p>The hero area highlights one major story using a large image and a captivating headline.</p>"
	}
]
};
