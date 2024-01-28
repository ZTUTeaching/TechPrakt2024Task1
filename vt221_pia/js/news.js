var newsArray = [
    {
        title: 'Новина 1',
        content: 'Це контент новини 1.',
        author: 'Автор 1',
        date: '10.11.23' 
    },
    { 
        title: 'Новина 2',
        content: 'Це контент новини 2.',
        author: 'Автор 2',
        date: '09.10.22' 
    },
    {
        title: 'Новина 3',
        content: 'Це контент новини 3.',
        author: 'Автор 3',
        date: '11.02.12'
    }
];

function createNewsItem(news) {
    var newsItem = document.createElement('div');
    var newsTitle = document.createElement('h2');
    var newsContent = document.createElement('p');
    var newsAuthor = document.createElement('p');
    var newsDate = document.createElement('p');

    newsTitle.textContent = news.title;
    newsContent.textContent = news.content;
    newsAuthor.textContent = 'Автор: ' + news.author;
    newsDate.textContent = 'Дата: ' + news.date;

    newsItem.appendChild(newsTitle);
    newsItem.appendChild(newsContent);
    newsItem.appendChild(newsAuthor);
    newsItem.appendChild(newsDate);

    newsItem.onclick = function() {
        var selectedNews = document.getElementsByClassName('selected');
        for (var i = 0; i < selectedNews.length; i++) {
            selectedNews[i].classList.remove('selected');
        }
        newsItem.classList.add('selected');
    };

    return newsItem;
}

// Завантаження новин до index.html
var newsDiv = document.getElementById('news');
for (var i = 0; i < newsArray.length; i++) {
    var newsItem = createNewsItem(newsArray[i]);
    newsDiv.appendChild(newsItem);
}