from tkinter import*
from tkinter import filedialog
root=Tk()
root.geometry("500x600")#                            CAN BE CHANGED TO LIKING
def save_file():
    open_file*filedialog.asksaveasfile(mode='w',defaultextension='*.txt')
    if open_file is None:
        return
    text=str(entry.get(1.0.END))
    open_file.write(text)
    open_file,close()
def clear():
    entry.delete(1.0,END)
def open_file():
    file=filedialog.askopenfile(mode="r",filetype=[('text files','*.txt')])
    if file is not None:
        content=file.read()
    entry.insert(INSERT,content)
#                                                    FIRST BUTTON
b1=Button(root,text="save file",command=save_file)
b1.place(x=10,y=10)
#                                                    SECOND BUTTON
b2=Button(root,text="clear",command=clear)
b2.place(x=70,y=10)
#                                                    THIRD BUTTON
b3=Button(root,text="open file",command=open_file)
b3.place(x=118,y=10)
entry=Text(root,height=35,width=68,wrap=WORD)#       CAN BE CHANGED TO LIKING
entry.place(x=10,y=50)

root.mainloop()
