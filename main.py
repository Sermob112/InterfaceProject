

import webbrowser
import pyautogui
import os
import time
import math

import keyboard
from pynput.mouse import Controller, Listener, Button
import threading

file_path = os.path.abspath("Mainpages/pages_v2/Authorization.html")
# file_path = os.path.abspath("Mainpages/pages_v2/Director.html")
webbrowser.open("file://" + file_path)
pyautogui.MINIMUM_DURATION = 0 

def stop_script():
    global is_script_running
    is_script_running = False
    print("Script stopped.")
    exit()
time.sleep(3)


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



# //Авторизация
move_and_click(972, 555, 30)
move_and_click(982, 627, 10)
move_and_click(982, 701, 10)
# Директор
move_and_click(180, 130, 60)
move_and_click(320, 130, 10)
move_and_click(447, 130, 10)
move_and_click(670, 130, 30)
move_and_click(670, 130, 0)
move_and_click(447, 130, 10)
move_and_click(320, 130, 10)
move_and_click(500, 320,10)
move_and_click(500, 370, 10)
move_and_click(500, 370, 0)
move_and_click(447, 130, 30)
move_and_click(1400, 240,60)
move_and_click(1400, 300,10)
move_and_click(1400, 365,10)
move_and_click(1400, 260,10)
move_and_click(1868, 196,60)
move_and_click(670, 130,60)
move_and_click(1130, 285,60)
move_and_click(1868, 196,60)
move_and_click(1869, 962, 60)
move_and_click(1736, 595, 60)

thread1 = threading.Thread(target=script_thread, args=(1736, 637, 600, 600, 60))
thread1.start()
move_and_click(734, 596, 10)
# Ожидаем, пока не будет нажата определенная клавиша для остановки скрипта
while is_script_running:
    if keyboard.is_pressed('esc'):
        stop_script()









# time.sleep(2)
# pyautogui.click()
# move_and_click(800, 270)
# move_and_click(800, 350)
# move_and_click(800, 375)