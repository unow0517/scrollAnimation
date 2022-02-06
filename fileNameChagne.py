import os 

# path = 'lowQualitylhalfResolution/'
path = 'Resolution_half'
files = os.listdir(path)

for index,file in enumerate(files): 
  os.rename(os.path.join(path,file), os.path.join(path,file.replace("_0","_")))
  # os.rename(os.path.join(path,file), os.path.join(path,file.replace("Germany 2","Germany")))


print("done")