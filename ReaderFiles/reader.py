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
    #Найти таблицу в HTML Ежедневник и очистить ее содержимое
    # table = soup.find('table', class_='widget-table')
    # tbody = table.find('tbody')
    # tbody.clear()

    # for item in root.findall(".//item"):
    #         tr = soup.new_tag('tr')

    #         # Оставляем чекбокс без изменений
    #         checkbox_td = soup.new_tag('td')
    #         checkbox_td.append(soup.new_tag('input', type='checkbox'))
    #         tr.append(checkbox_td)

    #         fields = ['to', 'from', 'status', 'date', 'type']
    #         for field in fields:
    #             td = soup.new_tag('td')
    #             td.string = item.find(field).text
    #             tr.append(td)

    #         tbody.append(tr)


    #Найти таблицу в HTML Сотрудники и очистить ее содержимое

    # workshop_elements = soup.find_all('p', class_='TaskBasicText icon-text')
    # brigade_elements = soup.find_all('p', class_='TaskBasicText Brigade-text')
    # # Найдите все элементы <p> с классом 'user-name' в HTML
    # user_name_elements = soup.find_all('p', class_='user-name')

    # # Найдите все элементы <p> с классом 'highlight-yellow' в HTML
    # highlight_yellow_elements = soup.find_all('p', class_='highlight-yellow')

    # # Итерируйтесь по элементам и заменяйте текст на данные из XML
    # for i in range(len(workshop_elements)):
    #     workshop_elements[i].string = root.find('.//workshop').text
    # for i in range(len(brigade_elements)):
    #     brigade_elements[i].string = root.find('.//brigade').text
        
    # for i in range(len(user_name_elements)):
    #     user_name_elements[i].string = root.find('.//name').text

    # for i in range(len(highlight_yellow_elements)):
    #     span_element = highlight_yellow_elements[i].find('span')
    #     span_element.string = root.find('.//status').text



#План


plan_contents_ul = soup.find('ul', class_='plan-contents')

# Находим все элементы <li class="plan"> в файле Director.html
plan_elements = plan_contents_ul.find_all('li', class_='plan')

# Перебираем планы в XML-данных и соответствующие элементы <li class="plan"> в HTML
for plan_xml, plan_element in zip(root.findall('.//plan'), plan_elements):
    # Очищаем элемент <li class="plan"> от предыдущего содержимого
    plan_element.clear()

    # Создаем элемент <h4 class="plan-title"> с данными из XML
    title_element = plan_xml.find('.//title')
    new_h4 = soup.new_tag('h4', **{'class': 'plan-title'})
    new_h4.string = title_element.text
    plan_element.append(new_h4)
    

    # Создаем элемент <progress id="progressWhole"> с данными из XML
    progress_whole_element = plan_xml.find('.//progressWhole')
    new_progress_whole = soup.new_tag('progress', id='progressWhole')
    new_progress_whole['value'] = progress_whole_element.text
    new_progress_whole['max'] = '100'
    plan_element.append(new_progress_whole)

    # Создаем таблицу <table class="sub-projects"> и ее содержимое с данными из XML
    sub_projects_table = soup.new_tag('table', **{'class': 'sub-projects'})

    # Создаем элемент <thead> и его содержимое с данными
    sub_projects_thead = soup.new_tag('thead')
    tr_header = soup.new_tag('tr')
    th_spec_code = soup.new_tag('th')
    th_spec_code.string = 'Спец код'
    th_order_name = soup.new_tag('th')
    th_order_name.string = 'Название заказа'
    th_progress_value = soup.new_tag('th')
    th_progress_value.string = 'Процент выполнения'
    th_status = soup.new_tag('th')
    th_status.string = 'Статус'
    tr_header.extend([th_spec_code, th_order_name, th_progress_value, th_status])
    sub_projects_thead.append(tr_header)

    # Добавляем <thead> в таблицу
    sub_projects_table.append(sub_projects_thead)

    sub_projects_tbody = soup.new_tag('tbody')
    for sub_project_element in plan_xml.findall('.//subProject'):
        tr = soup.new_tag('tr')
        spec_code = sub_project_element.find('.//specCode').text
        order_name = sub_project_element.find('.//orderName').text
        progress_value = sub_project_element.find('.//progressValue').text
        status = sub_project_element.find('.//status').text

        td_spec_code = soup.new_tag('td')
        td_spec_code.string = spec_code
        tr.append(td_spec_code)

        td_order_name = soup.new_tag('td')
        td_order_name.string = order_name
        tr.append(td_order_name)

        td_progress_value = soup.new_tag('td')
        progress_bar = soup.new_tag('progress', id='progressBar')
        progress_bar['value'] = progress_value
        progress_bar['max'] = '100'
        td_progress_value.append(progress_bar)
        progress_value_span = soup.new_tag('span', id='progressValue')
        progress_value_span.string = progress_value + '%'
        td_progress_value.append(progress_value_span)
        tr.append(td_progress_value)

        td_status = soup.new_tag('td')
        td_status.string = status
        tr.append(td_status)

        sub_projects_tbody.append(tr)

    sub_projects_table.append(sub_projects_tbody)
    plan_element.append(sub_projects_table)


#Сотрудники
# Найдите соответствующий элемент <name> в XML
# p_element = soup.find('p', class_='TaskBasicText icon-text')

# # Найдите соответствующий элемент <name> в XML
# workshop_name = root2.find('.//workshop/name').text

# # Установите текст элемента <p> равным тексту из XML
# p_element.string = workshop_name

# projects_ul = soup.find('ul', class_='projects1')

# brigade_text_p = soup.find('p', class_='TaskBasicText Brigade-text')
# brigade_name = root2.find('.//projects/project/brigade').text

# # Установите текст элемента <p> равным тексту из XML
# brigade_text_p.string = brigade_name

# icon_text_p = soup.find('p', class_='Brigade-Count')

# # Найдите соответствующий элемент <employee_count> в XML
# employee_count = root2.find('.//projects/project/employee_count').text

# # Установите текст элемента <p> равным тексту из XML
# icon_text_p.string = f'Количество сотрудников: {employee_count}'


# employee_table = soup.find('table', class_='employee-table')

# # Найдите все элементы <employee> в XML
# for employee in root2.findall('.//employee'):
#     # Создайте элементы HTML для сотрудника
#     tr = soup.new_tag('tr')
#     td1 = soup.new_tag('td')
#     td2 = soup.new_tag('td')
#     td3 = soup.new_tag('td')
    
#     # Загрузите данные из XML
#     employee_name = employee.find('name').text
#     employee_status = employee.find('status').text
#     employee_id = employee.find('employee_id').text
    
#     # Установите текст ячеек <td> равным данным из XML
#     td1.string = employee_name
#     td2.string = employee_status
#     td3.string = employee_id
    
#     # Добавьте ячейки в строку <tr>
#     tr.extend([td1, td2, td3])
    
#     # Добавьте строку в таблицу <table>
#     employee_table.find('tbody').append(tr)





# Сохранение измененного HTML обратно в файл
with open('./Mainpages/Pages_v2/director_new.html', 'w', encoding='utf-8') as html_file:
    html_file.write(str(soup))


# root = ET.Element("root")

# project1 = ET.SubElement(root, "project1")
# workshop_text = ET.SubElement(project1, "p", {"class": "TaskBasicText icon-text"})
# workshop_text.text = "Цех 11"

# brigade_text = ET.SubElement(project1, "p", {"class": "TaskBasicText icon-text"})
# brigade_text.text = "Бригада 4"

# user_name = ET.SubElement(project1, "p", {"class": "user-name"})
# user_name.text = "Имя пользователя"

# user_status = ET.SubElement(project1, "p", {"class": "highlight-yellow"})
# user_status_span = ET.SubElement(user_status, "span")
# user_status_span.text = "Работает"

# user_id = ET.SubElement(project1, "p", {"class": "user-id"})
# user_id.text = "Табельный номер"

# tree = ET.ElementTree(root)
# tree.write("./ReaderFiles/test2.xml")