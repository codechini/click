#imports
from tkinter import *
import random

qs3=['How is Carry Minati','Father of Aurengzeb','Where was the battle of Panipath Fought']
qs2=['How many layers does the earth have','What is latitude','What is longitude','What is a Pleateau']
qs1=['Explain GNU','WHat is LAMP','']
qs=['What is DBMS','What are algorithms','creppers _____']
subject=["math","science","geography","history"]

#GUI dimensions
root=Tk()
root.title('The Random Question Generator')
root.geometry("500x600")

#button definations
b1=StringVar()
b1.set('click here')



#Function
def question(qs):
    rad_qs=random.choice(qs)
    n=len(qs)
    print(rad_qs)
def sel1(event):
    if b1.get()=='math':
        label=Label(root,text=question(qs)).pack()
    elif b1.get()=='science':
        label = Label(root, text=question(qs1)).pack()
    elif b1.get() == 'geography':
        label = Label(root, text=question(qs2)).pack()
    elif b1.get()=='history':
        label = Label(root, text=question(qs3)).pack()
    else:
        print('no details found on the subject')


#    n=subject[0]
#    print(n)


#button action
menu=OptionMenu(root,b1, *subject, command=sel1)
menu.pack(pady=23)



#buttons location ,color  ,dimensions.




root.mainloop()
