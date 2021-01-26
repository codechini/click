#imports
from tkinter import *
import random
from tkinter import filedialog
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
def question():
    rad_qs=random.choice(qs)
    n=len(qs)
    print(rad_qs)
def sel1(event):
    label=Label(root,text=b1.get()).pack()
    if b1.get()=='math':
        label=Label(root,text=question()).pack()
    elif b1.get()=='science':
        label = Label(root, text=b1.get()).pack()
    else:
        print('no details found on the subject')


#    n=subject[0]
#    print(n)


#button action
menu=OptionMenu(root,b1, *subject, command=sel1)
menu.pack(pady=23)



#buttons location ,color  ,dimensions.




root.mainloop()