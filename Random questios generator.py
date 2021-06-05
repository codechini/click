#imports
import random
from tkinter import *
from tkinter import messagebox


History = ['Who is Carry Minati', 'Father of Aurengzeb', 'Where was the battle of Panipath Fought']
Geography = ['How many layers does the earth have', 'What is latitude', 'What is longitude', 'What is a Pleateau']
FOSS = ['Explain GNU', 'WHat is LAMP', 'Linux']
Maths = ['What is 30"60"90" rule', 'What is line 90" to a curve', 'What is the intersection of two sets', 'What is an ER diagram']
subject = ["math", "Free and Open Source Software", "geography", "history"]
exit =['Quit']

#GUI dimensions
root = Tk()
root.title('The Random Question Generator')
root.geometry("700x500")

#button definations
b1 = StringVar()
b1.set('Click here')


#Function
def question(qs):
    rad_qs = random.choice(qs)
    m1.config(text=rad_qs)


def sel1(event):
    if b1.get() == 'math':
        a = question(Maths)
    elif b1.get() == 'Free and Open Source Software':
        b = question(FOSS)
    elif b1.get() == 'geography':
        c = question(Geography)
    elif b1.get() == 'history':
        z = question(History)
    else:
        print('no details found on the subject')

def quit():
    root.destroy()


#button action
menu = OptionMenu(root, b1, *subject, command=sel1)
menu.pack(pady=23)

b2 = Button(root, text="Quit", command=quit, height=1, width=5)
b2.pack()

m1 = Message(root, text="Question :")
m1.pack()
#buttons location ,color  ,dimensions.



root.mainloop()
