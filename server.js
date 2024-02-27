const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

app.get('/', function(request, response) {
    console.log('Home page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html');

    // read in the index.html file
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        // replace the special strings with server generated strings
        data = data.replace(/\$OG_TITLE/g, 'TURYSTYKA BEZ FILTRÓW');
        data = data.replace(/\$OG_DESCRIPTION/g, "Grupą trzech znajomych, którzy dostrzegli potrzebę wprowadzenia na rynek turystyczny alternatywnych i nowoczesnych form działań wizerunkowych i promocyjnych. Nasz międzynarodowy kolektyw utworzyli w 2019 r.:Piotr Weckwerth, Serhii Zinchenko oraz Anton Karabach");
        result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
        response.send(result);
    });
});

app.get('/wydarzenia', function(request, response) {
    console.log('About page visited!');
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'wydarzenia Page');
        data = data.replace(/\$OG_DESCRIPTION/g, "wydarzenia page description");
        result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
        response.send(result);
    });
});


app.get('/o-nas', function(request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'O nas');
        data = data.replace(/\$OG_DESCRIPTION/g, "Turystyka BEZ FILTRÓW”  to marka, która startowała jako hobbystyczny blog turystyczny, z czasem rozrastając się do znaczącej w skali Bydgoszczy i regionu, inicjatywy");
        result = data.replace(/\$OG_IMAGE/g, '/static/media/main-about-page.a585be3f3782810e7ca7.png');
        response.send(result);
    });
});

app.get('/bydgoszcz', function(request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'bydgoszcz sre');
        data = data.replace(/\$OG_DESCRIPTION/g, "ssssssy");
        result = data.replace(/\$OG_IMAGE/g, '/static/media/main-about-page.a585be3f3782810e7ca7.png');
        response.send(result);
    });
});
app.get('/bydgoszcz/:categorySlug', function(request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html')
    fs.readFile(filePath, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, 'ssssss');
        data = data.replace(/\$OG_DESCRIPTION/g, "test");
        result = data.replace(/\$OG_IMAGE/g, '/static/media/main-about-page.a585be3f3782810e7ca7.png');
        response.send(result);
    });
});

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));