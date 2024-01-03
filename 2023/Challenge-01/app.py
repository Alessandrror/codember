import time

start_time = time.time()

message = open('./2023/Challenge-01/file.txt', "r")

str = []
nums = []
data = []

def push_data(v):
  str.append(v)
  nums.append(1)

def sum_data(v):
  nums[str.index(v)] = nums[str.index(v)] + 1

def join_data():
  for i in range(len(str)):
    data.append(f'{str[i]}{nums[i]}')
  return ''.join(data)

def counter(message):
  arr = message.split(' ')
  for i in range(len(arr)):
    sum_data(arr[i]) if arr[i] in str else push_data(arr[i])
  return join_data()

print(counter(message.read()))

print(f'Execution time: {(time.time() - start_time)*1000} s')