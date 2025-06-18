#ДЗ-1

#while True:
#    choise = input('Выберите фигуру под номером: от одного до десяти ')
#    for i in choise:
#        if choise == '1':
#            print('  *********\n    *******\n      *****\n        ***\n          *')
#        elif choise == '2':
#            print('*********\n*******\n*****\n***\n*'[::-1])
#        elif choise == '3':
#            print('**************\n  *********\n      *\n \n')
#        elif choise == '4':
#            print('\n \n      *\n  *********\n**************')
#        elif choise == '5':
#            print('**************\n  *********\n      *\n      *\n  *********\n**************')
#        elif choise == '6':
#            print(' *        *\n **      ** \n ***    *** \n ****  **** \n ********** \n ****  **** \n ***    *** \n **      ** \n *        *')
#        elif choise == '7':
#            print('*\n** \n*** \n**** \n***** \n**** \n*** \n** \n*')
#        elif choise == '8':
#            print('      * \n     ** \n    *** \n   **** \n  ***** \n   **** \n    *** \n     ** \n      *')
#        elif choise == '9':
#            print('*********  \n*******    \n*****      \n***        \n*          ')
#        elif choise == '10':
#            print('*********  \n*******    \n*****      \n***        \n*          '[::-1])
#            break
#        else:
#            print('Ошибка')
#    break

#ДЗ-2

#range1 = int(input('Введите начало: '))
#range2 = int(input('Введите конец: '))
#
#for i in range(range1, range2 + 1):
#    if i > 1:
#        for j in range(2, int(i**0.5) + 1):
#            if i % j == 0:
#                break
#        else:
#            print(i)




#count2 = 0
#count1 = 0
#for i in range(1,10 + 1):
#    count1  += 1
#    count2 = 0
#    for j in range(1,10 + 1):
#        count2 += 1
#        
#        print(f'{count1} * {count2} =' , i * j)




#input1 = int(input('Введите первое число '))
#input2 = int(input('Введите второе число '))
#count2 = 0
#count1 = input1 - 1
#for i in range(input1,input2 + 1):
#    count2 = 0
#    count1 += 1
#    for j in range(1,10 + 1):
#        count2 += 1
#        print(f'{count1} * {count2} =' , i * j)