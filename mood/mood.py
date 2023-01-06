import random, os, sys
# folder = ("B:/asit/audio")
class p1:
    def choice(self,path):
    # path = "B:\\asit\\audio"
        folder = os.listdir(path)
        song = random.choice(folder)
        os.startfile('B:\\asit\\audio\\'+song)
        return


# queue = random.shuffle(folder)
# for file in folder:
    # print('Song name:', file)
    # os.startfile(file)
    # break


# for i in range (0,5):
    # print(i)
    # break