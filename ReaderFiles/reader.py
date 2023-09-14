import xml.etree.ElementTree as ET
import os
from bs4 import BeautifulSoup

# Загрузка XML файла
tree = ET.parse('./ReaderFiles/test.xml')
root = tree.getroot()
tree2 = ET.parse('./ReaderFiles/test2.xml')
root2 = tree2.getroot()

#Роль Директор
with open('./Mainpages/Pages_v2/director.html', 'r', encoding='utf-8') as html_file:
    soup = BeautifulSoup(html_file, 'html.parser')
#     #Найти таблицу в HTML Ежедневник и очистить ее содержимое
#     table = soup.find('table', class_='widget-table')
#     tbody = table.find('tbody')
#     tbody.clear()

#     for item in root.findall(".//item"):
#             tr = soup.new_tag('tr')

#             # Оставляем чекбокс без изменений
#             checkbox_td = soup.new_tag('td')
#             checkbox_td.append(soup.new_tag('input', type='checkbox'))
#             tr.append(checkbox_td)

#             fields = ['to', 'from', 'status', 'date', 'type']
#             for field in fields:
#                 td = soup.new_tag('td')
#                 td.string = item.find(field).text
#                 tr.append(td)

#             tbody.append(tr)


    # Найти таблицу в HTML Сотрудники и очистить ее содержимое




#План


# plan_contents_ul = soup.find('ul', class_='plan-contents')

# # Находим все элементы <li class="plan"> в файле Director.html
# plan_elements = plan_contents_ul.find_all('li', class_='plan')

# # Перебираем планы в XML-данных и соответствующие элементы <li class="plan"> в HTML
# for plan_xml, plan_element in zip(root.findall('.//plan'), plan_elements):
#     # Очищаем элемент <li class="plan"> от предыдущего содержимого
#     plan_element.clear()

#     # Создаем элемент <h4 class="plan-title"> с данными из XML
#     title_element = plan_xml.find('.//title')
#     new_h4 = soup.new_tag('h4', **{'class': 'plan-title'})
#     new_h4.string = title_element.text
#     plan_element.append(new_h4)
    

#     # Создаем элемент <progress id="progressWhole"> с данными из XML
#     progress_whole_element = plan_xml.find('.//progressWhole')
#     new_progress_whole = soup.new_tag('progress', id='progressWhole')
#     new_progress_whole['value'] = progress_whole_element.text
#     new_progress_whole['max'] = '100'
#     plan_element.append(new_progress_whole)

#     # Создаем таблицу <table class="sub-projects"> и ее содержимое с данными из XML
#     sub_projects_table = soup.new_tag('table', **{'class': 'sub-projects'})

#     # Создаем элемент <thead> и его содержимое с данными
#     sub_projects_thead = soup.new_tag('thead')
#     tr_header = soup.new_tag('tr')
#     th_spec_code = soup.new_tag('th')
#     th_spec_code.string = 'Спец код'
#     th_order_name = soup.new_tag('th')
#     th_order_name.string = 'Название заказа'
#     th_progress_value = soup.new_tag('th')
#     th_progress_value.string = 'Процент выполнения'
#     th_status = soup.new_tag('th')
#     th_status.string = 'Статус'
#     tr_header.extend([th_spec_code, th_order_name, th_progress_value, th_status])
#     sub_projects_thead.append(tr_header)

#     # Добавляем <thead> в таблицу
#     sub_projects_table.append(sub_projects_thead)

#     sub_projects_tbody = soup.new_tag('tbody')
#     for sub_project_element in plan_xml.findall('.//subProject'):
#         tr = soup.new_tag('tr')
#         spec_code = sub_project_element.find('.//specCode').text
#         order_name = sub_project_element.find('.//orderName').text
#         progress_value = sub_project_element.find('.//progressValue').text
#         status = sub_project_element.find('.//status').text

#         td_spec_code = soup.new_tag('td')
#         td_spec_code.string = spec_code
#         tr.append(td_spec_code)

#         td_order_name = soup.new_tag('td')
#         td_order_name.string = order_name
#         tr.append(td_order_name)

#         td_progress_value = soup.new_tag('td')
#         progress_bar = soup.new_tag('progress', id='progressBar')
#         progress_bar['value'] = progress_value
#         progress_bar['max'] = '100'
#         td_progress_value.append(progress_bar)
#         progress_value_span = soup.new_tag('span', id='progressValue')
#         progress_value_span.string = progress_value + '%'
#         td_progress_value.append(progress_value_span)
#         tr.append(td_progress_value)

#         td_status = soup.new_tag('td')
#         td_status.string = status
#         tr.append(td_status)

#         sub_projects_tbody.append(tr)

#     sub_projects_table.append(sub_projects_tbody)
#     plan_element.append(sub_projects_table)


#Сотрудники


#№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№
#РАбочий код сотрудника
# new_div = soup.new_tag("div", attrs={"class": "TaskWorkShop workshop-title1"})
# icon_and_text_div = soup.new_tag("div", attrs={"class": "icon-and-text"})
# img = soup.new_tag("img", attrs={"class": "arrow-picture", "src": "../../img/Arrowdown.png"})
# p = soup.new_tag("p", attrs={"class": "TaskBasicText icon-text"})

# icon_and_text_div.append(img)
# icon_and_text_div.append(p)
# new_div.append(icon_and_text_div)
# container_div = soup.find("div", class_="container")
# container_div.append(new_div)

# new_ul = soup.new_tag("ul", attrs={"class": "projects1"})

# new_li = soup.new_tag("li", attrs={"class": "project1"})

# div_project_name_list = soup.new_tag("div", attrs={"class": "TaskWorkShopList projects_name_list"})
# div_icon_and_text = soup.new_tag("div", attrs={"class": "icon-and-text"})
# img = soup.new_tag("img", attrs={"class": "arrow-picture", "src": "../../img/Arrowdown.png", "alt": "Arrowdown"})
# p_brigade_text = soup.new_tag("p", attrs={"class": "TaskBasicText Brigade-text"})
# div_icon_and_text.append(img)
# div_icon_and_text.append(p_brigade_text)
# div_project_name_list.append(div_icon_and_text)
# div_project_name_list.append(p_brigade_text)

# p_brigade_count = soup.new_tag("p", attrs={"class": "TaskBasicText Brigade-Count"})


# div_project_name_list.append(p_brigade_count)


# ul_sub_projects1 = soup.new_tag("ul", attrs={"class": "sub-projects1"})

# table_employee = soup.new_tag("table", attrs={"class": "employee-table"})

# thead = soup.new_tag("thead")
# tr = soup.new_tag("tr")

# th_names = soup.new_tag("th")
# th_names.string = "Имя сотрудника"
# th_status = soup.new_tag("th")
# th_status.string = "Статус"
# th_employee_id = soup.new_tag("th")
# th_employee_id.string = "Табельный номер"

# tr.append(th_names)
# tr.append(th_status)
# tr.append(th_employee_id)


# thead.append(tr)

# table_employee.append(thead)


# tbody = soup.new_tag("tbody")

# table_employee.append(tbody)

# ul_sub_projects1.append(table_employee)
# new_li.append(div_project_name_list)
# new_li.append(ul_sub_projects1)
# new_ul.append(new_li)
# container_div.append(new_ul)
# updated_html = soup.prettify()

# #Заполнение 

# workshop_name = root.find("workshopName").text
# p.string = workshop_name

# brigade_text = root.find("brigadeText").text
# p_brigade_text.string = brigade_text

# brigade_count = root.find("brigadeCount").text
# p_brigade_count.string = brigade_count

# # Добавьте цех и бригаду в вашу структуру HTML
# container_div.insert(0, new_div)  # Вставьте цех в начало контейнера
# container_div.append(new_ul)  

# employee_data = []

# # Заполните employee_data данными из XML
# for employee in root.findall(".//employee"):
#     employee_name = employee.find("name").text
#     employee_status = employee.find("status").text
#     employee_id = employee.find("employeeID").text

#     employee_data.append({"name": employee_name, "status": employee_status, "employee_id": employee_id})

# # Теперь заполните таблицу данными из employee_data
# for data in employee_data:
#     tr_employee = soup.new_tag("tr")
#     td_employee_name = soup.new_tag("td")
#     td_employee_name.string = data["name"]
#     td_employee_status = soup.new_tag("td")
#     span_status = soup.new_tag("span", attrs={"class": "highlight-yellow"})
#     span_status.string = data["status"]
#     td_employee_status.append(span_status)
#     td_employee_id = soup.new_tag("td")
#     td_employee_id.string = data["employee_id"]

#     tr_employee.append(td_employee_name)
#     tr_employee.append(td_employee_status)
#     tr_employee.append(td_employee_id)

#     tbody.append(tr_employee)

# table_employee.append(tbody)

# ul_sub_projects1.append(table_employee)
# new_li.append(div_project_name_list)
# new_li.append(ul_sub_projects1)
# new_ul.append(new_li)
# container_div.append(new_ul)
# updated_html = soup.prettify()

#№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№№
##Рабочая версия заполнения сотрудников

container_div = soup.find("div", class_="container")

# Обходим каждый элемент employeeList в XML
for employee_list in root.findall(".//employeeList"):
    workshop_name = employee_list.find("workshopName").text
    # Создаем структуру HTML
    new_div = soup.new_tag("div", attrs={"class": "TaskWorkShop workshop-title1"})
    icon_and_text_div = soup.new_tag("div", attrs={"class": "icon-and-text"})
    img = soup.new_tag("img", attrs={"class": "arrow-picture", "src": "../../img/Arrowdown.png"})
    p = soup.new_tag("p", attrs={"class": "TaskBasicText icon-text"})
    icon_and_text_div.append(img)
    icon_and_text_div.append(p)
    new_div.append(icon_and_text_div)
    new_ul = soup.new_tag("ul", attrs={"class": "projects1"})

    for brigadeList in employee_list.findall(".//brigadeList"):
        brigade_text = brigadeList.find("brigadeText").text
        brigade_count = brigadeList.find("brigadeCount").text

        new_li = soup.new_tag("li", attrs={"class": "project1"})
        div_project_name_list = soup.new_tag("div", attrs={"class": "TaskWorkShopList projects_name_list"})
        div_icon_and_text = soup.new_tag("div", attrs={"class": "icon-and-text"})
        img = soup.new_tag("img", attrs={"class": "arrow-picture", "src": "../../img/Arrowdown.png", "alt": "Arrowdown"})
        p_brigade_text = soup.new_tag("p", attrs={"class": "TaskBasicText Brigade-text"})
        div_icon_and_text.append(img)
        div_icon_and_text.append(p_brigade_text)
        div_project_name_list.append(div_icon_and_text)
        div_project_name_list.append(p_brigade_text)

        p_brigade_count = soup.new_tag("p", attrs={"class": "TaskBasicText Brigade-Count"})
        div_project_name_list.append(p_brigade_count)

        ul_sub_projects1 = soup.new_tag("ul", attrs={"class": "sub-projects1"})
        table_employee = soup.new_tag("table", attrs={"class": "employee-table"})
        thead = soup.new_tag("thead")
        tr = soup.new_tag("tr")
        th_names = soup.new_tag("th")
        th_names.string = "Должность"
        th_status = soup.new_tag("th")
        th_status.string = "Статус"
        th_employee_id = soup.new_tag("th")
        th_employee_id.string = "Табельный номер"
        tr.append(th_names)
        tr.append(th_status)
        tr.append(th_employee_id)
        thead.append(tr)
        table_employee.append(thead)
        tbody = soup.new_tag("tbody")

        # Получаем данные о сотрудниках из XML
        employee_data = []
        for employee in brigadeList.findall(".//employee"):
            employee_name = employee.find("name").text
            employee_status = employee.find("status").text
            employee_id = employee.find("employeeID").text
            employee_data.append({"name": employee_name, "status": employee_status, "employee_id": employee_id})

        # Заполняем таблицу данными
        for data in employee_data:
            tr_employee = soup.new_tag("tr")
            td_employee_name = soup.new_tag("td")
            td_employee_name.string = data["name"]
            td_employee_status = soup.new_tag("td",  attrs={"class": "highlight-green"})
            span_status = soup.new_tag("span")
            span_status.string = data["status"]
            td_employee_status.append(span_status)
            td_employee_id = soup.new_tag("td")
            td_employee_id.string = data["employee_id"]
            tr_employee.append(td_employee_name)
            tr_employee.append(td_employee_status)
            tr_employee.append(td_employee_id)
            tbody.append(tr_employee)

        table_employee.append(tbody)
        ul_sub_projects1.append(table_employee)
        new_li.append(div_project_name_list)
        new_li.append(ul_sub_projects1)
        new_ul.append(new_li)
        new_div.append(new_ul)

        # Заполняем текстовые элементы данными
        p.string = workshop_name
        p_brigade_text.string = brigade_text
        p_brigade_count.string = brigade_count

        # Добавляем структуру HTML в контейнер
        container_div.append(new_div)
        container_div.append(new_ul)



# Преобразуем в строку
updated_html = soup.prettify()

##########################Цеха#################################
# factory_map_div = soup.find("div", class_="factory-map")

# # Обходим каждый элемент workshop в XML
# for workshop in root.findall(".//workshop"):
#     workshop_name = workshop.find("workshopName").text
#     workshop_info = workshop.find("workshopInfo").text

#     # Создаем структуру HTML для цеха
#     workshop_class = workshop.get("class")
#     workshop_div = soup.new_tag("div", attrs={"class": f"workshop {workshop_class}"})
#     workshop_name_div = soup.new_tag("div", attrs={"class": "workshop-name"})
#     workshop_name_div.string = workshop_name
#     workshop_info_div = soup.new_tag("div", attrs={"class": "workshop-info"})
#     workshop_info_div.string = workshop_info

#     # Добавьте созданные элементы в цех
#     workshop_div.append(workshop_name_div)
#     workshop_div.append(workshop_info_div)

#     # Добавьте цех в элемент <div class="factory-map">
#     factory_map_div.append(workshop_div)




# Сохраните измененный HTML обратно в файл
with open('./Mainpages/Pages_v2/director_new.html', 'w', encoding='utf-8') as html_file:
    html_file.write(str(soup))

