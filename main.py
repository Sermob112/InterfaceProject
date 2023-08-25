

import webbrowser
import pyautogui
import os
import time
import math
import random
import numpy as np
from scipy import interpolate

file_path = os.path.abspath("Mainpages/pages_v2/Authorization.html")
webbrowser.open("file://" + file_path)
pyautogui.MINIMUM_DURATION = 0 
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
        
        # Пауза для создания плавного движения
        # Уменьшите эту паузу для более быстрой анимации
    
    pyautogui.click()
    time.sleep(2)


# //Авторизация
move_and_click(972, 555, 30)
move_and_click(982, 627, 10)
move_and_click(982, 701, 10)
# Директоръ
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
move_and_click(1400, 260,60)
move_and_click(1400, 300,10)
move_and_click(1400, 365,10)
move_and_click(1400, 260,10)
move_and_click(1868, 196,60)
move_and_click(670, 130,60)
move_and_click(1130, 285,60)
move_and_click(1868, 196,60)
# time.sleep(2)
# pyautogui.click()
# move_and_click(800, 270)
# move_and_click(800, 350)
# move_and_click(800, 375)