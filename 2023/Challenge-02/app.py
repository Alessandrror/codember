import time
start_time = time.time()

message: str = open('./2023/Challenge-02/file.txt', "r")

def compiler(message: str):

  """
    Función que compila un mensaje a de un lenguaje a otro.
    Recibe una cadena de texto y retorna una cadena de texto.
  """

  num: int = 0
  nums: list = []
  for i in range(len(message)):
    # Para usar ```match``` es requerido Python 3.10 o superior
    # To use the ```match``` statement is required Python 3.10 or newer
    match message[i]:
      case '#':
        num+=1
      case '@':
        num-=1
      case '*':
        num*=num
      case '&':
        nums.append(str(num))
  return ''.join(nums)

print(compiler(message.read()))

print(f'Execution time: {(time.time() - start_time)*1000} s')