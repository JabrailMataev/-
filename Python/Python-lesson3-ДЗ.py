#Домашнее Задание-1

#Задание-1

#palindrom = input('Введите слово ').lower()
#
#if palindrom == palindrom[::-1]:
#    print(f'{palindrom} "Это слово Палиндром"')
#else:
#    print(f'{palindrom} "Это слово НЕ Палиндром"')

#Задание-2

#someText = input('Введите текст: ').split()
#reservedWords = input('Введите зарезервированные слова через пробел: ').split()
#
#for index, elem in enumerate(someText):
#    if elem in reservedWords:
#        someText[index] = elem.upper()
#
#print(' '.join(someText))


#Задание-3

#someText = input('Любой текст: ')
#count = 0
#for i in someText:
#    if i == '.':
#       count += 1
#       print(count)


#Домашнее Задание-2

#Задание-1

#expression = input('Введите выражение (например 2+2): ')
#operators = ['+', '-', '*', '/']
#for i in operators:
#    if i in expression:
#        operator = i
#
#if operator:
#    num1, num2 = expression.split(operator)
#    num1 = int(num1)
#    num2 = int(num2)
#    
#    if operator == '+':
#        result = num1 + num2
#    elif operator == '-':
#        result = num1 - num2
#    elif operator == '*':
#        result = num1 * num2
#    elif operator == '/':
#        result = num1 / num2
#    
#    print(result)
#else:
#    print("Неизвестная операция!")

#Задание-1 

#numbers_input = input('Введите числа через пробел (отрицательные и положительные): ')
#
#
#numbers = []
#for num in numbers_input.split():
#    if num.lstrip('-').isdigit():
#        numbers.append(int(num))
#
#if numbers:
#    
#    min_num = min(numbers)
#    max_num = max(numbers)
#    
#    
#    negative = 0
#    positive = 0
#    zero = 0
#    for num in numbers:
#        if num < 0:
#            negative += 1
#        elif num > 0:
#            positive += 1
#        else:
#            zero += 1
#    
#    print(f'Минимальное число: {min_num}')
#    print(f'Максимальное число: {max_num}')
#    print(f'Количество нулей: {zero}')
#    print(f'Количество положительных чисел: {positive}')
#    print(f'Количество отрицательных чисел: {negative}')
#else:
#    print('Не введено ни одного числа!')