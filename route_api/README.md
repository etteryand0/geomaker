# GEOROUTES REST API
блабла

## Установка
1. Скопировать этот репозиторий:
    ```
    git clone https://github.com/etteryand0/geomaker
    cd geomaker
    ```
2. Создать виртуальное окружение:
    ```
    pip install virtualenv
    virtualenv REST_API --python=python
    cd REST_API\Scripts
    activate.bat
    ```
3. Установить зависимости. Перейдём в папку репозитория и установим нужные библиотеки
    ```
    cd ..\..
    pip intall -r requirements.txt
    ```
4. Запустить REST API
   ```
   python manage.py runserver
   ```

## Пользование
Отправлить GET запросы по 
```
http://127.0.0.1:8000/api/v1/georoutes/<нач_точка_X>/<нач_точка_Y>/<радиус>
```
Где <нач_точка_..> - это геоданные начальной позиции, <радиус> - желаемое расстояние.