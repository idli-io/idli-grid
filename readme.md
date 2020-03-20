![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

## Using this component

### Script tag
- Put a script tag similar to this `<script src='https://unpkg.com/@idli/idli-grid@0.6.5/dist/idli-grid.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install @idli/idli-grid --save`
- Put a script tag similar to this `<script src='node_modules/@idli/idli-grid/dist/idli-grid.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install @idli/idli-grid --save`
- Add an import to the npm packages `import @idli/idli-grid;`
- Then you can use the element anywhere in your template, JSX, html etc



#### Example:
<!---
```
<custom-element-demo>
  <template>
    <script src='https://unpkg.com/@idli/idli-grid@0.6.5/dist/idli-grid.js'></script>
    <div style="width: 80%">
          <idli-grid
                  column-config='[{"name":"name","label":"Name","width":300,"fixed":true},{"name":"age","label":"Age"},{"name":"eyeColor","label":"Eye Color","width":500},{"name":"company","label":"Company","width":500},{"name":"email","label":"Email","width":500}, {"name":"address","label":"Address","width":1000}]'
                  data='[{"_id":"5e7118ddce4b3d577956457f","index":0,"guid":"ae04f5ed-5cd3-491e-8e9a-6c6b31a4ba7d","isActive":false,"balance":"$2,443.30","age":21,"eyeColor":"blue","name":"Courtney","company":"XYQAG","email":"undefined.undefined@xyqag.co.uk","phone":"+1 (839) 560-3581","address":"326 Irving Street, Grimsley, Texas, 4048"},{"_id":"5e7118dd240daa9a2f209fd9","index":1,"guid":"c9db5a9f-069e-4343-8c11-3d65e92275c2","isActive":true,"balance":"$1,623.55","age":34,"eyeColor":"brown","name":"Wilcox","company":"STRALOY","email":"undefined.undefined@straloy.io","phone":"+1 (826) 447-3398","address":"624 Sullivan Street, Waterford, Mississippi, 5396"},{"_id":"5e7118ddc9e046778096d134","index":2,"guid":"6b298b9c-98c1-4fc0-b27d-656b2957fb74","isActive":false,"balance":"$1,506.91","age":22,"eyeColor":"brown","name":"Lucas","company":"LUNCHPOD","email":"undefined.undefined@lunchpod.us","phone":"+1 (883) 503-3953","address":"257 Colonial Road, Odessa, South Carolina, 9336"},{"_id":"5e7118dd71803419299a491f","index":3,"guid":"a4a40c2f-cbbe-426c-9eca-72edb79276ab","isActive":true,"balance":"$3,574.16","age":23,"eyeColor":"green","name":"David","company":"VELOS","email":"undefined.undefined@velos.info","phone":"+1 (923) 580-3316","address":"330 Saratoga Avenue, Richford, Tennessee, 4924"},{"_id":"5e7118dd8259ab09b69b933d","index":4,"guid":"bb0c5530-4912-421c-bd05-d21c5549780c","isActive":true,"balance":"$1,597.90","age":30,"eyeColor":"blue","name":"Dorothea","company":"ZILLAN","email":"undefined.undefined@zillan.net","phone":"+1 (826) 421-2410","address":"472 Hutchinson Court, Gila, South Dakota, 2145"},{"_id":"5e7118dd257ef0fd4c3f777a","index":5,"guid":"8b972c44-af1b-4f87-9655-b16a7f8d18d6","isActive":false,"balance":"$2,619.84","age":25,"eyeColor":"blue","name":"Guy","company":"ISOTERNIA","email":"undefined.undefined@isoternia.com","phone":"+1 (885) 454-2649","address":"662 Battery Avenue, Trinway, Arizona, 1492"},{"_id":"5e7118ddc207ba62b6ea05f3","index":6,"guid":"fbfec03e-3cb3-4436-a232-9a4ce1d0ca37","isActive":true,"balance":"$3,340.48","age":35,"eyeColor":"green","name":"Cristina","company":"ASSURITY","email":"undefined.undefined@assurity.tv","phone":"+1 (949) 576-2111","address":"468 Junius Street, Kipp, District Of Columbia, 5425"},{"_id":"5e7118ddb536a4b1810b5bd1","index":7,"guid":"ee503e84-5cc9-407e-849d-ca38ab5bac8f","isActive":false,"balance":"$2,727.70","age":23,"eyeColor":"brown","name":"Mueller","company":"KIGGLE","email":"undefined.undefined@kiggle.ca","phone":"+1 (905) 490-3690","address":"315 Eckford Street, Sussex, Kentucky, 4357"},{"_id":"5e7118dddc93cdbe95b60ab7","index":8,"guid":"b2482927-e36a-4825-aae2-c3434727b7cd","isActive":true,"balance":"$2,672.79","age":21,"eyeColor":"green","name":"Leann","company":"NORSUL","email":"undefined.undefined@norsul.name","phone":"+1 (810) 482-2496","address":"628 Glenmore Avenue, Tibbie, Pennsylvania, 3409"}, {"_id":"5e71196d67aab3989f8d3f75","index":0,"guid":"96a33233-58c5-410d-b3cc-3499181536bc","isActive":false,"balance":"$1,647.95","age":24,"eyeColor":"green","name":"Sanford","company":"LIMAGE","email":"undefined.undefined@limage.biz","phone":"+1 (962) 538-3987","address":"440 Church Lane, Bowie, Marshall Islands, 4466"},{"_id":"5e71196d655f0bb3f4afff17","index":1,"guid":"887d8bfd-4a2e-43c9-805a-9333119bf331","isActive":false,"balance":"$1,993.08","age":31,"eyeColor":"brown","name":"Small","company":"XEREX","email":"undefined.undefined@xerex.tv","phone":"+1 (896) 428-3080","address":"558 Lyme Avenue, Verdi, Connecticut, 7664"},{"_id":"5e71196d590f4aaede6c4868","index":2,"guid":"fc9ca29c-0ce5-4e10-a25b-83bcb755cf30","isActive":false,"balance":"$2,211.18","age":31,"eyeColor":"brown","name":"Sharp","company":"COMBOGENE","email":"undefined.undefined@combogene.biz","phone":"+1 (840) 508-3359","address":"288 Bank Street, Camptown, Georgia, 6714"},{"_id":"5e71196d836001631b93427f","index":3,"guid":"a6fbfe66-d856-4113-96b7-d237e87573d5","isActive":true,"balance":"$3,940.72","age":33,"eyeColor":"brown","name":"Annette","company":"OCEANICA","email":"undefined.undefined@oceanica.io","phone":"+1 (828) 550-3764","address":"678 Benson Avenue, Knowlton, Federated States Of Micronesia, 1324"},{"_id":"5e71196dab2a55d8b9d57b1a","index":4,"guid":"446ffd0d-8a89-41da-b5db-7fe54e8ecf20","isActive":true,"balance":"$1,777.16","age":27,"eyeColor":"green","name":"Carroll","company":"KANGLE","email":"undefined.undefined@kangle.me","phone":"+1 (845) 423-2085","address":"125 Beayer Place, Wakarusa, New Jersey, 2845"},{"_id":"5e71196d33c69c8f61a1665c","index":5,"guid":"998177a4-6204-4256-8cb9-098977ece595","isActive":false,"balance":"$2,010.32","age":38,"eyeColor":"green","name":"Karyn","company":"DIGIGENE","email":"undefined.undefined@digigene.name","phone":"+1 (950) 562-3309","address":"505 Seagate Terrace, Cetronia, South Carolina, 3168"},{"_id":"5e71196d12a52caeee7f4794","index":6,"guid":"72c223c3-1cad-4ce4-b993-5284aa6ca691","isActive":true,"balance":"$3,255.32","age":36,"eyeColor":"blue","name":"Juliet","company":"PROSELY","email":"undefined.undefined@prosely.ca","phone":"+1 (950) 503-2772","address":"232 Hutchinson Court, Westphalia, North Carolina, 1852"}]'
          ></idli-grid>
      </div>
  </template>
</custom-element-demo>
```
-->
    

```html
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0">
    <title>Stencil Component Starter</title>

    <script type="module" src="/build/idli-grid.esm.js"></script>
    <script nomodule src="/build/idli-grid.js"></script>

</head>
<body>

<div style="width: 80%">
    <idli-grid id="grid"
            column-config='[{"name":"name","label":"Name","width":300,"fixed":true},{"name":"age","label":"Age"},{"name":"eyeColor","label":"Eye Color","width":500},{"name":"company","label":"Company","width":500},{"name":"email","label":"Email","width":500}, {"name":"address","label":"Address","width":1000}]'
            data='[{"_id":"5e7118ddce4b3d577956457f","index":0,"guid":"ae04f5ed-5cd3-491e-8e9a-6c6b31a4ba7d","isActive":false,"balance":"$2,443.30","age":21,"eyeColor":"blue","name":"Courtney","company":"XYQAG","email":"undefined.undefined@xyqag.co.uk","phone":"+1 (839) 560-3581","address":"326 Irving Street, Grimsley, Texas, 4048"},{"_id":"5e7118dd240daa9a2f209fd9","index":1,"guid":"c9db5a9f-069e-4343-8c11-3d65e92275c2","isActive":true,"balance":"$1,623.55","age":34,"eyeColor":"brown","name":"Wilcox","company":"STRALOY","email":"undefined.undefined@straloy.io","phone":"+1 (826) 447-3398","address":"624 Sullivan Street, Waterford, Mississippi, 5396"},{"_id":"5e7118ddc9e046778096d134","index":2,"guid":"6b298b9c-98c1-4fc0-b27d-656b2957fb74","isActive":false,"balance":"$1,506.91","age":22,"eyeColor":"brown","name":"Lucas","company":"LUNCHPOD","email":"undefined.undefined@lunchpod.us","phone":"+1 (883) 503-3953","address":"257 Colonial Road, Odessa, South Carolina, 9336"},{"_id":"5e7118dd71803419299a491f","index":3,"guid":"a4a40c2f-cbbe-426c-9eca-72edb79276ab","isActive":true,"balance":"$3,574.16","age":23,"eyeColor":"green","name":"David","company":"VELOS","email":"undefined.undefined@velos.info","phone":"+1 (923) 580-3316","address":"330 Saratoga Avenue, Richford, Tennessee, 4924"},{"_id":"5e7118dd8259ab09b69b933d","index":4,"guid":"bb0c5530-4912-421c-bd05-d21c5549780c","isActive":true,"balance":"$1,597.90","age":30,"eyeColor":"blue","name":"Dorothea","company":"ZILLAN","email":"undefined.undefined@zillan.net","phone":"+1 (826) 421-2410","address":"472 Hutchinson Court, Gila, South Dakota, 2145"},{"_id":"5e7118dd257ef0fd4c3f777a","index":5,"guid":"8b972c44-af1b-4f87-9655-b16a7f8d18d6","isActive":false,"balance":"$2,619.84","age":25,"eyeColor":"blue","name":"Guy","company":"ISOTERNIA","email":"undefined.undefined@isoternia.com","phone":"+1 (885) 454-2649","address":"662 Battery Avenue, Trinway, Arizona, 1492"},{"_id":"5e7118ddc207ba62b6ea05f3","index":6,"guid":"fbfec03e-3cb3-4436-a232-9a4ce1d0ca37","isActive":true,"balance":"$3,340.48","age":35,"eyeColor":"green","name":"Cristina","company":"ASSURITY","email":"undefined.undefined@assurity.tv","phone":"+1 (949) 576-2111","address":"468 Junius Street, Kipp, District Of Columbia, 5425"},{"_id":"5e7118ddb536a4b1810b5bd1","index":7,"guid":"ee503e84-5cc9-407e-849d-ca38ab5bac8f","isActive":false,"balance":"$2,727.70","age":23,"eyeColor":"brown","name":"Mueller","company":"KIGGLE","email":"undefined.undefined@kiggle.ca","phone":"+1 (905) 490-3690","address":"315 Eckford Street, Sussex, Kentucky, 4357"},{"_id":"5e7118dddc93cdbe95b60ab7","index":8,"guid":"b2482927-e36a-4825-aae2-c3434727b7cd","isActive":true,"balance":"$2,672.79","age":21,"eyeColor":"green","name":"Leann","company":"NORSUL","email":"undefined.undefined@norsul.name","phone":"+1 (810) 482-2496","address":"628 Glenmore Avenue, Tibbie, Pennsylvania, 3409"}, {"_id":"5e71196d67aab3989f8d3f75","index":0,"guid":"96a33233-58c5-410d-b3cc-3499181536bc","isActive":false,"balance":"$1,647.95","age":24,"eyeColor":"green","name":"Sanford","company":"LIMAGE","email":"undefined.undefined@limage.biz","phone":"+1 (962) 538-3987","address":"440 Church Lane, Bowie, Marshall Islands, 4466"},{"_id":"5e71196d655f0bb3f4afff17","index":1,"guid":"887d8bfd-4a2e-43c9-805a-9333119bf331","isActive":false,"balance":"$1,993.08","age":31,"eyeColor":"brown","name":"Small","company":"XEREX","email":"undefined.undefined@xerex.tv","phone":"+1 (896) 428-3080","address":"558 Lyme Avenue, Verdi, Connecticut, 7664"},{"_id":"5e71196d590f4aaede6c4868","index":2,"guid":"fc9ca29c-0ce5-4e10-a25b-83bcb755cf30","isActive":false,"balance":"$2,211.18","age":31,"eyeColor":"brown","name":"Sharp","company":"COMBOGENE","email":"undefined.undefined@combogene.biz","phone":"+1 (840) 508-3359","address":"288 Bank Street, Camptown, Georgia, 6714"},{"_id":"5e71196d836001631b93427f","index":3,"guid":"a6fbfe66-d856-4113-96b7-d237e87573d5","isActive":true,"balance":"$3,940.72","age":33,"eyeColor":"brown","name":"Annette","company":"OCEANICA","email":"undefined.undefined@oceanica.io","phone":"+1 (828) 550-3764","address":"678 Benson Avenue, Knowlton, Federated States Of Micronesia, 1324"},{"_id":"5e71196dab2a55d8b9d57b1a","index":4,"guid":"446ffd0d-8a89-41da-b5db-7fe54e8ecf20","isActive":true,"balance":"$1,777.16","age":27,"eyeColor":"green","name":"Carroll","company":"KANGLE","email":"undefined.undefined@kangle.me","phone":"+1 (845) 423-2085","address":"125 Beayer Place, Wakarusa, New Jersey, 2845"},{"_id":"5e71196d33c69c8f61a1665c","index":5,"guid":"998177a4-6204-4256-8cb9-098977ece595","isActive":false,"balance":"$2,010.32","age":38,"eyeColor":"green","name":"Karyn","company":"DIGIGENE","email":"undefined.undefined@digigene.name","phone":"+1 (950) 562-3309","address":"505 Seagate Terrace, Cetronia, South Carolina, 3168"},{"_id":"5e71196d12a52caeee7f4794","index":6,"guid":"72c223c3-1cad-4ce4-b993-5284aa6ca691","isActive":true,"balance":"$3,255.32","age":36,"eyeColor":"blue","name":"Juliet","company":"PROSELY","email":"undefined.undefined@prosely.ca","phone":"+1 (950) 503-2772","address":"232 Hutchinson Court, Westphalia, North Carolina, 1852"}]'
    ></idli-grid>
    <div class="result">
        <h4>Cell Click Result :</h4>
        <p><b>Cell Data :</b> <pre id="record"></pre></p>
        <p><b>Column :</b> <span id="column"></span></p>
        <p>Check console for full event detail.</p>
    </div>
</div>
<script>
    document.getElementById('grid').addEventListener('cellClicked', function(evt) {
        console.log(evt.detail);
        document.getElementById('record').innerText = JSON.stringify(evt.detail.record, null, 3);
        document.getElementById('column').innerText = evt.detail.column.label;
    })
</script>

</body>
</html>
```

#### Screenshot:
![Screenshot](screenshot.png?raw=true "Screenshot")

[Demo](https://jsbin.com/kirumuc/edit?html,output)