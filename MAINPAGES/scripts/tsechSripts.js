
// vidgetLineHelper.addEventListener("click", function(event){
//     // for (var i = vidgetLine.children.length - 1; i >= 0; i--) {
//     //     vidgetLine.children[i].classList.remove('activeButton');
//     // }

//     // for (var i = vidgetContext.children.length - 1; i >= 0; i--) {
//     //     vidgetContext.children[i].classList.remove('activeBlock');
//     // }

//     if (event.target.closest('button')){
//         // event.target.closest('button').classList.add('activeButton');
//         event.target.closest('button').classList.toggle('activeButton');

//         // // document.getElementById(event.target.closest('button').getAttribute('data-target')).classList.add('activeBlock');
//     }
// })

var sortDirection = "asc"; // По умолчанию сортировка по возрастанию


// Ежедневник
function sortTable(columnIndex) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.querySelector(".myTable");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[columnIndex];
      y = rows[i + 1].getElementsByTagName("td")[columnIndex];

      // Для сортировки даты рождения предварительно преобразуем строку в объект Date
      if (columnIndex === 3) {
        x = new Date(x.innerHTML);
        y = new Date(y.innerHTML);
      } else {
        x = x.innerHTML;
        y = y.innerHTML;
      }
      
      // Сравниваем значения в зависимости от направления сортировки
      if (sortDirection === "asc" && x > y) {
        shouldSwitch = true;
        break;
      } else if (sortDirection === "desc" && x < y) {
        shouldSwitch = true;
        break;
      }
    }
    
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

  // Изменяем направление сортировки после каждого клика
  if(sortDirection === "asc"){
    sortDirection = "desc";
  }
  else{
    sortDirection = "asc";
  }
}

function sortTableWorker(columnIndex) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTableWorker");
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;
    
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[columnIndex];
      y = rows[i + 1].getElementsByTagName("td")[columnIndex];

      // Для сортировки даты рождения предварительно преобразуем строку в объект Date
      
      x = x.innerHTML;
      y = y.innerHTML;    
      
      // Сравниваем значения в зависимости от направления сортировки
      if (sortDirection === "asc" && x > y) {
        shouldSwitch = true;
        break;
      } else if (sortDirection === "desc" && x < y) {
        shouldSwitch = true;
        break;
      }
    }
    
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

  // Изменяем направление сортировки после каждого клика
  if(sortDirection === "asc"){
    sortDirection = "desc";
  }
  else{
    sortDirection = "asc";
  }
}

// //Развертка описания при нажатии на строку столбца
// const ezhednevnik = document.querySelector('.firstBlock');
// var lastClickedRow = 2;

// ezhednevnik.addEventListener("click", function(event){
//   var clickedRow = event.target.closest('tbody tr');

//   for (var i = document.querySelector('.secondBlock').children.length - 1; i >= 0; i--) {
//     document.querySelector('.secondBlock').children[i].classList.remove('activeDiscription');
// }

//   if (clickedRow) {
//     if (clickedRow.rowIndex === lastClickedRow) {
//       // Повторное нажатие на строку
//       document.querySelector('.firstBlock').style.width = "100%";
//       document.querySelector('.secondBlock').style.display = "none";
//       lastClickedRow = null;
//       } 
//     else {
//       // event.target.closest('button').classList.add('activeButton');
//       document.querySelector('.firstBlock').style.width = "100%";
//       document.querySelector('.secondBlock').style.display = "block";
//       lastClickedRow = clickedRow.rowIndex;
//     }
//   }
// })

//Развертка описания при нажатии на оборудование цеха
const tsechMap = document.querySelector('.wholePlan');
var lastClickedEquipment = null;
const tsechDiscription = document.querySelector('.tsechDiscription')

tsechMap.addEventListener("click", function(event){
  var clickedEquipment = event.target.closest('.lineOfEquipment .equipmentIcon');

  for (var i = tsechDiscription.children.length - 1; i >= 0; i--) {
    tsechDiscription.classList.remove('activeBlock');
}


    if (clickedEquipment === lastClickedEquipment) {
      // Повторное нажатие на строку
      document.querySelector('.wholePlan').style.width = "100%";
      tsechDiscription.classList.remove('activeBlock');
      lastClickedEquipment = null;
      } 
    else {
      // event.target.closest('button').classList.add('activeButton');
      document.querySelector('.wholePlan').style.width = "50%";
      tsechDiscription.classList.add('activeBlock');
      lastClickedEquipment = clickedEquipment;
    }
  
});

const projectsWhole = document.querySelectorAll('.projects');

tsechMap.addEventListener("click", function(event){
  tsechDiscription.querySelector('.equipmentInfo').innerHTML = "Оброудование номер -";
  var clickedEquipment = event.target.closest('.lineOfEquipment .equipmentIcon');
try{
    tsechDiscription.querySelector('.equipmentInfo').innerHTML = tsechDiscription.querySelector('.equipmentInfo').innerHTML  + ` ${clickedEquipment.innerHTML}`;

    tsechDiscription.querySelector('.brigade№').innerHTML = "Бригада номер -";
  tsechDiscription.querySelector('.brigade№').innerHTML = tsechDiscription.querySelector('.brigade№').innerHTML  + ` ${clickedEquipment.id}`;


  const projectsChief = projectsWhole[1].querySelectorAll('.project');

  projectsChief.forEach((project) => {
  const projectsChief = project.querySelectorAll('.sub-projects');
  projectsChief.forEach((subProject)=>{
    subProject.classList.remove('active');
    var tbodyTest = subProject.querySelector('tbody');
    var tbodyTr = tbodyTest.querySelectorAll('tr');
    tbodyTr.forEach((indivTr) =>{
      if(indivTr.children[2].innerHTML !== clickedEquipment.id){
        indivTr.style.display = 'none';
      }
      else{
        indivTr.style.display = 'table-row';
      }
    });

    var checkAction = 0;
    project.addEventListener('click', () => {
      if(checkAction ===0){
        subProject.classList.add('active');
        checkAction+=1;
      }
      else{
        subProject.classList.remove('active');
        checkAction = 0;
      }
    });
  })

});

  tsechDiscription.querySelector('.equipmentStatus').innerHTML = `Статус оборудования -`;
    // Получить вычисленные стили элемента
    var styles = window.getComputedStyle(clickedEquipment);

    // Получить значение background-color
    var backgroundColor = styles.backgroundColor;
  if(backgroundColor == "rgb(251, 97, 97)"){
    tsechDiscription.querySelector('.equipmentStatus').innerHTML = tsechDiscription.querySelector('.equipmentStatus').innerHTML  + ` Не работает`;
  }
  else   if(backgroundColor == "rgb(254, 244, 6)"){
    tsechDiscription.querySelector('.equipmentStatus').innerHTML = tsechDiscription.querySelector('.equipmentStatus').innerHTML  + ` Остановлен`;
  }
  else   if(backgroundColor == "rgb(113, 220, 123)"){
    tsechDiscription.querySelector('.equipmentStatus').innerHTML = tsechDiscription.querySelector('.equipmentStatus').innerHTML  + ` Работает`;
  }
  else{
    tsechDiscription.querySelector('.equipmentStatus').innerHTML = tsechDiscription.querySelector('.equipmentStatus').innerHTML  + ` Не известно`;  
  }

  tsechDiscription.querySelector('.equipmentName').innerHTML = `Наименование оборудования -`;
  if(clickedEquipment.classList.contains('kran')){
    tsechDiscription.querySelector('.equipmentName').innerHTML = tsechDiscription.querySelector('.equipmentName').innerHTML  + ` Кран козловой электрический грузоподъемностью 2 т с двумя талями`;
  }
  else if(clickedEquipment.classList.contains('press375')){
    tsechDiscription.querySelector('.equipmentName').innerHTML = tsechDiscription.querySelector('.equipmentName').innerHTML  + ` пресс вертикальный портальный гидравлический листогибочный усилием 3,75 МН (375 тс);`;
  }
  else if(clickedEquipment.classList.contains('press4')){
    tsechDiscription.querySelector('.equipmentName').innerHTML = tsechDiscription.querySelector('.equipmentName').innerHTML  + ` пресс вальцы трехвалковые открытые листогибочные гидравлические с изменяемой геометрией и рабочей длиной валка 4 м;`;
  }
  else if(clickedEquipment.classList.contains('press22')){
    tsechDiscription.querySelector('.equipmentName').innerHTML = tsechDiscription.querySelector('.equipmentName').innerHTML  + ` пресс кромкогибочный усилием 2,2 МН (220 тс) с длиной ножа 4 м;`;
  }
  else{
    tsechDiscription.querySelector('.equipmentName').innerHTML = tsechDiscription.querySelector('.equipmentName').innerHTML  + ` станок профилегибочный усилием 2,75 МН (275 тс);`;
  }
}
  catch(e){
    document.querySelector('.wholePlan').style.width = "100%";
    tsechDiscription.classList.remove('activeBlock');
    lastClickedEquipment = null;
  }
  
});

// План выполнения


const projectsChief = projectsWhole[0].querySelectorAll('.project');

projectsChief.forEach((project) => {
  const subProjects = project.querySelectorAll('.sub-projects');
  subProjects.forEach((subProject)=>{
    var sum = 0;
    var count = 0;
    var tbodyTest = subProject.querySelector('tbody');
    var tbodyTr = tbodyTest.querySelectorAll('tr');
    tbodyTr.forEach((indivTr) =>{
      var progressBar = indivTr.querySelector("#progressBar");
      var progressValue = indivTr.querySelector("#progressValue");
      // Получаем заданное значение прогресса из span
      var value = parseInt(progressValue.innerText, 10);
      sum += value;
      count++;
    
      // Устанавливаем значение атрибута value элемента progress
      progressBar.value = value;

    });

    var progressWhole = project.querySelector('#progressWhole');

    // Вычисляем среднее значение
    var average = Math.round(sum / count,0);

    // Устанавливаем среднее значение в атрибут value элемента progress
    progressWhole.value = average;

    if(project.querySelector('.plan-title').innerHTML === document.querySelector('.wholePlan .WhichPlan').innerHTML){
      document.querySelector('.wholePlan #progressWhole').value = average;
    }

    project.addEventListener('click', () => {
      subProject.classList.toggle('active');
    });
  })

});

// // Финансы

// google.load("visualization", "1", {packages:["corechart"]});
// google.setOnLoadCallback(drawChart);
// function drawChart() {
//   var data = google.visualization.arrayToDataTable([
//     ['Год', 'В теории', 'По факту'],
//     ['2020', 2000, 2143],
//     ['2021', 2150, 2087],
//     ['2022', 2100, 2108]
//    ]);
//    var options = {
//     title: 'Статистика выполнения поланов',
//     hAxis: {title: 'Год'},
//     vAxis: {title: 'Кол-во выполненых планов'}
//    };
//    var chart = new google.visualization.ColumnChart(document.getElementById('moneyGain'));
//    chart.draw(data, options);
//    var n = document.querySelector('#moneyGain');
//    var n1 = n.querySelector('div');
//    var n2 = n1.querySelector('div');
//    var n3 = n2.querySelector('div');
//    var n4 = n3.querySelector('svg');
//    n4.style.overflow = 'visible';
//    n4.style.scale = '0.8';

//    var data = google.visualization.arrayToDataTable([
//     ['Год', 'В теории', 'По факту'],
//     ['2020', 300, 313],
//     ['2021', 400, 378],
//     ['2022', 450, 449]
//    ]);
//    var options = {
//     title: 'Посещяемость',
//     hAxis: {title: 'Год'},
//     vAxis: {title: 'Зафиксированно в целом'}
//    };
//    var chart = new google.visualization.ColumnChart(document.getElementById('attendance'));
//    chart.draw(data, options);
//    var n = document.querySelector('#attendance');
//    var n1 = n.querySelector('div');
//    var n2 = n1.querySelector('div');
//    var n3 = n2.querySelector('div');
//    var n4 = n3.querySelector('svg');
//    n4.style.scale = '0.8';
//    n4.style.overflow = 'visible';

//   var data = google.visualization.arrayToDataTable([
//     ['Пол', 'Процент'],
//     ['М',     78.05],
//     ['Ж', 21.95]
//   ]);
//   var options = {
//     title: 'Соотношение М к М',
//     is3D: true,
//     pieResidueSliceLabel: 'Нету данных'
//   };
//   var chart = new google.visualization.PieChart(document.getElementById('MtoW'));
//   chart.draw(data, options);

//   var n = document.querySelector('#MtoW');
//    var n1 = n.querySelector('div');
//    var n2 = n1.querySelector('div');
//    var n3 = n2.querySelector('div');
//    var n4 = n3.querySelector('svg');
//    n4.style.overflow = 'visible';
//    n4.style.scale = '0.8';

// }


// Получаем все элементы с заданным классом
const elements = document.querySelectorAll('.kran');
var currentChild = 0;
// Перебираем каждый элемент
elements.forEach(element => {
  // Добавляем обработчик события на наведение мыши
  
  if(currentChild === elements.length - 1){
  element.addEventListener('mouseover', () => {
    // Добавляем класс 'active' для текущего элемента
    element.classList.add('active');
    
    // Перебираем остальные элементы
    elements.forEach(otherElement => {
      // Проверяем, чтобы текущий элемент не совпадал с элементом, на котором было событие 'mouseover'
      if (otherElement !== element) {
        // Добавляем класс 'active' для остальных элементов
        otherElement.classList.add('active');
      }
    });
  });
  
  // Добавляем обработчик события на уход мыши
  element.addEventListener('mouseout', () => {
    // Удаляем класс 'active' для всех элементов
    elements.forEach(otherElement => {
      otherElement.classList.remove('active');
    });
  });
}
currentChild++;
});

// Получаем все элементы с заданным классом
const elements_1 = document.querySelectorAll('.stanok275');
var currentChild = 0;
// Перебираем каждый элемент
elements_1.forEach(element => {
  // Добавляем обработчик события на наведение мыши
  
  if(currentChild === elements_1.length - 1){
  element.addEventListener('mouseover', () => {
    // Добавляем класс 'active' для текущего элемента
    element.classList.add('active');
    
    // Перебираем остальные элементы
    elements_1.forEach(otherElement => {
      // Проверяем, чтобы текущий элемент не совпадал с элементом, на котором было событие 'mouseover'
      if (otherElement !== element) {
        // Добавляем класс 'active' для остальных элементов
        otherElement.classList.add('active');
      }
    });
  });
  
  // Добавляем обработчик события на уход мыши
  element.addEventListener('mouseout', () => {
    // Удаляем класс 'active' для всех элементов
    elements_1.forEach(otherElement => {
      otherElement.classList.remove('active');
    });
  });
}
currentChild++;
});

// Получаем все элементы с заданным классом
const elements_2 = document.querySelectorAll('.press4');
var currentChild = 0;
// Перебираем каждый элемент
elements_2.forEach(element => {
  // Добавляем обработчик события на наведение мыши
  
  if(currentChild === elements_2.length - 1){
  element.addEventListener('mouseover', () => {
    // Добавляем класс 'active' для текущего элемента
    element.classList.add('active');
    
    // Перебираем остальные элементы
    elements_2.forEach(otherElement => {
      // Проверяем, чтобы текущий элемент не совпадал с элементом, на котором было событие 'mouseover'
      if (otherElement !== element) {
        // Добавляем класс 'active' для остальных элементов
        otherElement.classList.add('active');
      }
    });
  });
  
  // Добавляем обработчик события на уход мыши
  element.addEventListener('mouseout', () => {
    // Удаляем класс 'active' для всех элементов
    elements_2.forEach(otherElement => {
      otherElement.classList.remove('active');
    });
  });
}
currentChild++;
});

// Получаем все элементы с заданным классом
const elements_3 = document.querySelectorAll('.press22');
var currentChild = 0;
// Перебираем каждый элемент
elements_3.forEach(element => {
  // Добавляем обработчик события на наведение мыши
  
  if(currentChild === elements_3.length - 1){
  element.addEventListener('mouseover', () => {
    // Добавляем класс 'active' для текущего элемента
    element.classList.add('active');
    
    // Перебираем остальные элементы
    elements_3.forEach(otherElement => {
      // Проверяем, чтобы текущий элемент не совпадал с элементом, на котором было событие 'mouseover'
      if (otherElement !== element) {
        // Добавляем класс 'active' для остальных элементов
        otherElement.classList.add('active');
      }
    });
  });
  
  // Добавляем обработчик события на уход мыши
  element.addEventListener('mouseout', () => {
    // Удаляем класс 'active' для всех элементов
    elements_3.forEach(otherElement => {
      otherElement.classList.remove('active');
    });
  });
}
currentChild++;
});


// Получаем все элементы с заданным классом
const elements_4 = document.querySelectorAll('.press375');
var currentChild = 0;
// Перебираем каждый элемент
elements_4.forEach(element => {
  // Добавляем обработчик события на наведение мыши
  
  if(currentChild === elements_4.length - 1){
  element.addEventListener('mouseover', () => {
    // Добавляем класс 'active' для текущего элемента
    element.classList.add('active');
    
    // Перебираем остальные элементы
    elements_4.forEach(otherElement => {
      // Проверяем, чтобы текущий элемент не совпадал с элементом, на котором было событие 'mouseover'
      if (otherElement !== element) {
        // Добавляем класс 'active' для остальных элементов
        otherElement.classList.add('active');
      }
    });
  });
  
  // Добавляем обработчик события на уход мыши
  element.addEventListener('mouseout', () => {
    // Удаляем класс 'active' для всех элементов
    elements_4.forEach(otherElement => {
      otherElement.classList.remove('active');
    });
  });
}
currentChild++;
});