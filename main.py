

import webbrowser
import pyautogui
import os
import time
import math
import numpy as np
import keyboard
from pynput.mouse import Controller, Listener, Button
import threading

file_path = os.path.abspath("Mainpages/pages_v2/chief.html")
# file_path = os.path.abspath("Mainpages/pages_v2/Director.html")
webbrowser.open("file://" + file_path)
pyautogui.MINIMUM_DURATION = 0 

def stop_script():
    global is_script_running
    is_script_running = False
    print("Script stopped.")
    exit()
time.sleep(1)


def move_and_click(x, y,num_steps):
    # Начальные координаты мыши
    start_x, start_y = pyautogui.position()

    # Количество шагов для плавного перемещения
    num_steps = num_steps

    # Симуляция плавного перемещения мыши и клика
    for step in range(1, num_steps + 1):
        # Вычисление текущих координат по шагу
        progress = step / num_steps
        acceleration = math.sin(progress * math.pi / 2)  # Ускорение
        deceleration = math.sin((1 - progress) * math.pi / 2)  # Замедление
        current_x = start_x + (x - start_x) * acceleration
        current_y = start_y + (y - start_y) * acceleration
        
        # Перемещение мыши
        pyautogui.moveTo(current_x, current_y)
        time.sleep(0.01 * deceleration)  # Замедление для более плавного завершения
        if keyboard.is_pressed('esc'):
            stop_script()
        # Пауза для создания плавного движения
        # Уменьшите эту паузу для более быстрой анимации
    
    pyautogui.click()
    time.sleep(2)


mouse = Controller()

is_script_running = True

def on_click(x, y, button, pressed):
    pass

screen_resolution = (1920, 1080)
target_resolution = (1920, 1080)
targx = target_resolution[0] / screen_resolution[0]
tatgy =  target_resolution[1] / screen_resolution[1]
# Функция для преобразования абсолютных координат в относительные

def absolute_to_relative_move(x, y):
    relative_x = x * targx
    relative_y = y * tatgy 
    if keyboard.is_pressed('esc'):
            stop_script()
    pyautogui.moveTo(relative_x, relative_y, duration=0.8)
    pyautogui.click()
    time.sleep(1.5)
    
    # return int(relative_x), int(relative_y)


def script_thread(start_x, start_y, end_x, end_y, num_steps):
    global is_script_running
    
    # Зажимаем кнопку мыши на начальных координатах
    mouse.press(Button.left)
    # Симуляция плавного перемещения мыши
    for step in range(1, num_steps + 1):
        progress = step / num_steps
        acceleration = math.sin(progress * math.pi / 2)  # Ускорение
        deceleration = math.sin((1 - progress) * math.pi / 2)  # Замедление
        current_x = start_x + (end_x - start_x) * acceleration
        current_y = start_y + (end_y - start_y) * acceleration

        # Перемещение мыши
        mouse.position = (current_x, current_y)

        # Пауза для создания плавного движения
        time.sleep(0.01 * deceleration)  # Замедление для более плавного завершения
    
    # Отпускаем кнопку мыши
    mouse.release(Button.left)

    # Ожидаем, пока не будет нажата определенная клавиша для остановки скрипта
    while is_script_running:
        if keyboard.is_pressed('esc'):
            stop_script()

# Запускаем скрипт в отдельном потоке

# def bezier_curve(t, p0, p1, p2):
#     # Формула кривой Безье
#     return (1 - t) ** 2 * p0 + 2 * (1 - t) * t * p1 + t ** 2 * p2

# def move_and_click_with_bezier(x, y, num_points):
#     start_x, start_y = pyautogui.position()
#     control_x = (start_x + x) // 2  # Выберите координату X для контрольной точки
#     control_y = (start_y + y) // 2  # Выберите координату Y для контрольной точки
    
#     # Создание массива значений t для интерполяции
#     t_values = np.linspace(0, 1, num_points)
    
#     for t in t_values:
#         # Вычисление координат на кривой Безье
#         current_x = int(bezier_curve(t, start_x, control_x, x))
#         current_y = int(bezier_curve(t, start_y, control_y, y))
        
#         pyautogui.moveTo(current_x, current_y)
#         time.sleep(0)
    
#     pyautogui.click()

# pyautogui.moveTo(100, 100, duration=0.5)

# # Вызов функции с использованием кривой Безье
# move_and_click_with_bezier(972, 555, 100)

# absolute_to_relative_move(972,555)

# //Авторизация
# print(pyautogui.size())

# absolute_to_relative_move(972, 485)
# keyboard.write("login", delay=0.1)
# absolute_to_relative_move(982, 557)
# keyboard.write("password", delay=0.1)
# absolute_to_relative_move(982, 631)

# # //Директор
# #Виджет Ежедневник

# absolute_to_relative_move(659,255)
# absolute_to_relative_move(659,313)
# #Карта завода
# pyautogui.scroll(-360)

# absolute_to_relative_move(940,422)
# absolute_to_relative_move(1190,350)
# absolute_to_relative_move(1387,544)
# #Список сотрудников
# absolute_to_relative_move(501,325)
# absolute_to_relative_move(477,427)
# absolute_to_relative_move(513,511)
# absolute_to_relative_move(1434,612)
# keyboard.write("Жду вас у себя", delay=0.1)
# absolute_to_relative_move(1634,610)
# absolute_to_relative_move(477,427)
# absolute_to_relative_move(501,325)
# absolute_to_relative_move(359,429)
# absolute_to_relative_move(424,634)
# absolute_to_relative_move(423,727)
# absolute_to_relative_move(1434,612)
# keyboard.write("Подойдите ко мне сейчас!", delay=0.1)
# absolute_to_relative_move(1634,610)
# absolute_to_relative_move(1051,376)
# #Закрыть чат и виджет сотрудников
# absolute_to_relative_move(1685,108)
# absolute_to_relative_move(871,108)
# #перетаскиваем график
# absolute_to_relative_move(363,806)
# pyautogui.moveTo(363,806, duration=1)
# pyautogui.mouseDown()
# pyautogui.moveTo(363,112,duration=1)
# pyautogui.mouseUp() 
# absolute_to_relative_move(204,324)
# absolute_to_relative_move(292,323)
# absolute_to_relative_move(299,153)
# absolute_to_relative_move(213,293)
# absolute_to_relative_move(622,108)

# #Открываем виджет Планирования
# pyautogui.scroll(360)
# absolute_to_relative_move(210,105)
# absolute_to_relative_move(196,196)
# absolute_to_relative_move(176,576)
# pyautogui.scroll(-360)
# absolute_to_relative_move(176,401)
# absolute_to_relative_move(177,630)

# //Начальник цеха
#Виджет Ежедневник
absolute_to_relative_move(659,290)
absolute_to_relative_move(659,313)


pyautogui.scroll(-360)
#Схема цеха 
absolute_to_relative_move(903,445)
absolute_to_relative_move(903,445)
absolute_to_relative_move(1027,445)
absolute_to_relative_move(1027,445)
pyautogui.moveTo(1677,426, duration=1)
pyautogui.mouseDown()
pyautogui.moveTo(1680,627,duration=1)
pyautogui.mouseUp() 
absolute_to_relative_move(991,411)
absolute_to_relative_move(975,532)
#Список сотрудников
absolute_to_relative_move(324,174)
absolute_to_relative_move(324,217)
absolute_to_relative_move(372,319)
#Чат сотрудников
absolute_to_relative_move(1151,613)
keyboard.write("Подойдите ко мне!", delay=0.1)
#Чат закрываю все окна
absolute_to_relative_move(1465,615)
absolute_to_relative_move(1518,113)
absolute_to_relative_move(1853,644)
absolute_to_relative_move(1213,112)

#График
pyautogui.moveTo(1239,794, duration=1)
pyautogui.mouseDown()
pyautogui.moveTo(651,790,duration=1)
pyautogui.mouseUp() 

absolute_to_relative_move(209,617)
absolute_to_relative_move(286,634)
absolute_to_relative_move(287,466)
absolute_to_relative_move(209,617)
absolute_to_relative_move(286,634)

# thread1 = threading.Thread(target=script_thread, args=(1736, 637, 600, 600, 60))
# thread1.start()
# move_and_click(734, 596, 10)
# Ожидаем, пока не будет нажата определенная клавиша для остановки скрипта
while is_script_running:
    if keyboard.is_pressed('esc'):
        stop_script()









# time.sleep(2)
# pyautogui.click()
# move_and_click(800, 270)
# move_and_click(800, 350)
# move_and_click(800, 375)