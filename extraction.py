import requests
import urllib.request
import time
from bs4 import BeautifulSoup

url = 'https://infosci.cornell.edu/people/faculty'
response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')
mydivs = soup.findAll("div", {"class": "person-listing"})
faculty = []

for i in mydivs:
    tName = i.findAll("a", {"class": "text-primary"})[0].string
    tPosition = i.findAll("p")[0].get_text()
    tInterest = i.findAll("p")[1].get_text()
    tImage = i.findAll("img")[0].get('src')
    obj = {
        "name" : tName,
        "position" : tPosition,
        "interests" : tInterest,
        "image" : tImage,
    }
    
    # firebase.post('/teacher', obj)

    faculty.append(obj)

    print(faculty)

