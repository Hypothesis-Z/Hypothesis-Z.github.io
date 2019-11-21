import requests, json

if __name__ == '__main__':
    url = 'https://api.github.com/users/hypothesis-z/repos'
    r = requests.get(url).json()
    
    print(r)
