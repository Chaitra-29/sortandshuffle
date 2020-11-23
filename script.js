const listElement = [
    {
      id: 1,
      color: "#6F98A8",
    },
    {
      id: 2,
      color: "#2B8EAD",
    },
    {
      id: 3,
      color: "#2F454E",
    },
    {
      id: 4,
      color: "#2B8EAD",
    },
    {
      id: 5,
      color: "#2F454E",
    },
    {
      id: 6,
      color: "#BFBFBF",
    },
    {
      id: 7,
      color: "#BFBFBF",
    },
    {
      id: 8,
      color: "#6F98A8",
    },
    {
      id: 9,
      color: "#2F454E",
    },
  ];
  
  function load(list) {
    let items = list ? list : listElement;
    var app = document.querySelector("#app");
    app.innerHTML =
    '<ul class="container">' +
      items.map(function (item) {
        return `<li class='item' style=background-color:${item.color};border-color:${item.color}> ${item.id}</li>`;
      }).join('') + '</ul>';
  }

  function sort() {
    for(let i = 0; i < listElement.length - 1; i++) {
      for(let j = i+1; j < listElement.length; j++) {
        if(listElement[i].id > listElement[j].id){
          swap(listElement,i,j);
        }  
      }
    }
    this.load(listElement);
  }
  
  function shuffle() {
      for (var i = listElement.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        swap(listElement,i,random);
      }
      this.load(listElement);
  }

  function swap(arr, i, j){
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }