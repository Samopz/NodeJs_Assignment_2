const http = require('http');
const url = require('url');

const PORT = 8900;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    // To Handle GET/books

    if (path === '/books' && method === 'GET') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.end('GET request for /books');
    }

    // To Handle PUT/books
    
    else if (path === '/books' && method === 'PUT') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('PUT request for /books');
    }

    // To Handle DELETE/books

    else if (path === '/books' && method === 'DELETE') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('DELETE request for /books');
    }

    // To Handle GET/books/authors

    else if (path === '/books/authors' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('GET request for /books/authors');
    }

    // To Handle POST/books/authors
    else if (path === '/books/authors' && method === 'POST') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('POST request for /books/authors');
    }

    // To Handle PUT/books/authors
    else if (path === '/books/authors' && method === 'PUT') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('PUT request for /books/authors');
    }

    // To Handle invalid routes

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('You have reached the end point!');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});