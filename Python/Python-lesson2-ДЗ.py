#Домашнее Задание 1

#ЗАДАНИЕ-1

#first =int(input('Первое число '))
#second = int(input('Второе число '))
#third = int(input('Третье число '))
#mathOperator = input('Введите Math знак ')
#
#if(mathOperator == '+'):
#    result = first + second + third
#    print(result)
#elif(mathOperator == '*'):
#    result = first * second * third
#    print(result)


#ЗАДАНИЕ-2

#first =int(input('Первое число '))
#second = int(input('Второе число '))
#third = int(input('Третье число '))
#choise = input('Введите ваш выбор: max,min,ariphmetic ')

#if(choise == 'max'):
#   print('Max number',max(first,second,third))
#elif(choise == 'min'):
#     print('Min Number',min(first,second,third))
#elif(choise == 'ariphmetic'):
#    result = (first + second + third) / 3
#    print(result)


#ЗАДАНИЕ-3


#meters = int(input('кол-во метров '))
#choise = input('Введите ваш выбор: miles,inches,yards  ')

#if(choise == 'miles'):
#   miles =  meters * 1609,34
#   print(miles)
#elif(choise == 'inches'):
#   inches = meters * 39,37
#   print(inches)
#elif(choise == 'yards'):
#    yards = meters * 0,9144
#    print(yards)



#Домашнее Задание 2


#ЗАДАНИЕ-1

#weekDays = input('Введите число 1-7 ')
#
#if(weekDays == '1'):
#    print('Понедельник')
#
#elif(weekDays == '2'):
#    print('Вторник')
#
#elif(weekDays == '3'):
#    print('Среда')
#
#elif(weekDays == '4'):
#    print('Четверг')
#
#elif(weekDays == '5'):
#    print('Пятница')
#
#elif(weekDays == '6'):
#    print('Суббота')
#    
#elif(weekDays == '7'):
#    print('Воскресенье')

#ЗАДАНИЕ-2

#monthName = input('Введите месяц 1-12 ')
#
#if(monthName == '1'):
#    print('Январь')
#
#elif(monthName == '2'):
#    print('Февраль')
#
#elif(monthName == '3'):
#    print('Март')
#
#elif(monthName == '4'):
#    print('Апрель')
#
#elif(monthName == '5'):
#    print('Май')
#
#elif(monthName == '6'):
#    print('Июнь')
#    
#elif(monthName == '7'):
#    print('Июль')
#
#elif(monthName == '8'):
#    print('Август')
#
#elif(monthName == '9'):
#    print('Сентябрь')
#
#elif(monthName == '10'):
#    print('Октябрь')
#
#elif(monthName == '11'):
#    print('Ноябрь')
#
#elif(monthName == '12'):
#    print('Декабрь')

#ЗАДАНИЕ-3

#number = int(input('Введите число '))
#
#if(number > 0):
#    print('Number is positive')
#
#elif(number < 0):
#    print('Number is negative')
#
#elif(number == 0):
#    print('Number is equal to zero')


#ЗАДАНИЕ-4

#number1 = int(input('Введите первое число '))
#
#number2 = int(input('Введите второе число '))
#
#if(number1 == number2):
#    print()
#else:
#    print(min(number1,number2),max(number1,number2))


#Домашнее задание 3

#ЗАДАНИЕ-1

#number = int(input('Введите число '))
#
#
#for i in range(0,100):
#    if 0 >= number <= 100 != True:
#        continue
#    if number % 5 == 0 and number % 3 != 0:
#        print('Buzz')
#    elif number % 5 != 0 and number % 3 == 0:
#        print('Fizz')
#    elif number % 5 == 0 and number % 3 ==0:
#        print('Fizz Buzz')
#    elif number % 5 != 0 and number % 3 !=0:
#        print(number)






#ЗАДАНИЕ-2

#result = number = int(input('Введите число '))
#choise = int(input('Введите степень от 0 до 7 '))

#if choise == 0:
#    result = number ** 0
#    print(result)
#elif choise == 1 :
#    result = number ** 1
#    print(result)
#elif choise == 2 :
#    result = number ** 2 
#    print(result)
#elif choise == 3 :
#    result = number ** 3
#    print(result)
#elif choise == 4:
#    result = number ** 4
#    print(result)
#elif choise == 5:
#    result = number ** 5
#    print(result)
#elif choise == 6 :
#    result = number ** 6
#    print(result)
#elif choise == 7 :
#    result = number ** 7
#    print(result)





#ЗАДАНИЕ-3

#number = float(input('Введите стоимость разговора '))
#operator1 = input('Выберите с какого оператора вы звоните(МТС,Билайн,Мегафон) ')
#operator2 = input('Выберите на какой оператор поступит звонок(МТС,Билайн,Мегафон) ')

#if operator1 == 'Билайн' and operator2 == 'Мегафон' :
#    print(number * 1.8)
#elif operator1 == 'Мегафон' and operator2 == 'Билайн' :
#    print(number * 1.8)
#elif operator1 == 'МТС' and operator2 == 'Мегафон':
#    print(number * 2)
#elif operator1 == 'Мегафон' and operator2 == 'МТС' :
#    print(number * 2)
#elif operator1 == 'Билайн' and operator2 == 'МТС':
#    print(number * 2.3)
#elif operator1 == 'МТС' and operator2 == 'Билайн':
#    print(number * 2.3)
#else:
#    print('Ошибка введен неверный оператор')


#ЗАДАНИЕ-4

#one = int(input('Введите для менеджера уровень продаж (1 или 2 или 3) '))
#two = int(input('Введите для менеджера уровень продаж (1 или 2 или 3) '))
#three = int(input('Введите для менеджера уровень продаж (1 или 2 или 3) '))


#if one == 1 and two == 2 and three == 3:
#   one = 500
#   two = 700
#   three = 1000
#   print(one / 3)
#   print(two / 5)
#   print(three /8)
#   print('Менеджер 3 заслуживают премию')
#elif one == 3 and two == 2 and three == 1:
#   one = 1000
#   two = 700
#   three = 500
#   print(one / 8)
#   print(two / 5)
#   print(three / 3)
#   print('Менеджер 1 заслуживают премию')
#elif one == 1 and two == 3 and three == 2:
#   one = 500
#   two = 1000
#   three = 700
#   print(one / 3)
#   print(two / 8)
#   print(three / 5)
#   print('Менеджер 2 заслуживают премию')
#elif one and two and three == 1:
#   one = 500
#   two = 500
#   three = 500
#   print(500 / 3)
#   print('Все заслуживают премию')
#elif one and two and three == 2:
#   one = 700
#   two = 700
#   three = 700
#   print(700 / 5)
#   print('Все заслуживают премию')
#elif one and two and three == 3:
#   one = 1000
#   two = 1000
#   three =1000
#   print(1000 / 8)
#   print('Все заслуживают премию')
#else:
#   print('Ошибка')