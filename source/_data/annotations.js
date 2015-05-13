var comments = {
"comments" : [
	{
        "el": ".hgroup .headline",
        "title": "Headline",
        "comment": "<p>Web and email headings are to be no more than <strong>40 characters</strong>.</p>"
	},
	{
        "el": ".hgroup .subhead",
        "title": "Subhead",
        "comment": "<p>Subheadings may be used for emails and news stories only, and are to be no more than <strong>150 characters</strong>.</p>"
	},
	{
        "el": "time",
        "title": "Dates and times",
        "comment": "<h5>Days</h5><p>Don't abbreviate the days of the week.</p><h5>Dates</h5><p>Abbreviate the following months when used with dates:<br />Jan., Feb., Aug., Sept., Oct., Nov. and Dec.</p><pre>The event will be held on March 23.<br />The event will be held on Aug. 23.<br />The event will be held in September.</pre><h5>Times</h5><p>Write a.m. and p.m. in lowercase, with periods</p><pre>11 a.m., 1 p.m., 5:30 p.m.</pre><p>Use 12 a.m./12 p.m. or midnight/noon, but never together</p><p>Time precedes day and date.</p><pre>The event will be held at 11:30 a.m., Friday, Oct. 13.</pre><h5>HTML</h5><p>Dates and times can be difficult for machines to understand. To make dates unambiguous, use the time tag along with the datetime attribute. The value of the datetime attribute is the date specified using the <a href=\"http://en.wikipedia.org/wiki/ISO_8601\">ISO 8601 date/time standard</a>.</p>"
    },
    {
        "el": ".card",
        "title": "Card",
        "comment": "<p>Cards present snippets of information from parent content types. The default card appearance can be altered adding a class modifier:</p><h5>.border-off</h5><p>Removes the border wrapping the card.</p><h5>.card_priority_1</h5><p>A premiere card with increased text and altered layout for top visual priority.</p><h5>.card_priority_2</h5><p>Increase text size for slightly more priority.</p>"
    },
    {
        "el": ".card_thumb",
        "title": "Card: Thumb",
        "comment": "<p>Thumbnails can be displayed to the right (default) or left (.flipped) of the card content.</p>"
    },
    {
        "el": "img[srcset]",
        "title": "Image",
        "comment": "<p>The responsive image element provides an array of image urls and their inherent sizes (srcset) as well as defines the size of the image across various breakpoints (sizes).</p><h5>srcset</h5><p>The image size can be provided as either a fixed width (480w) or a resolution descriptor (2x). <b>Do not mix</b> the formats.<h5>sizes</h5>Pair media queries with lengths. A length can be absolute (480px, 16em) or relative (33.3vw).</p>"
    },
    {
        "el": "picture",
        "title": "Picture",
        "comment": "<p>This is best used for art direction or type-switching of images where multiple sources and media queries are required. Basic image switching can be accomplished by adding srcset and sizes attributes to an image tag.</p>"
    },





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
