# 대통령 담그기

> A template that provides political issues sorted by candidate for 2017 presidential election

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
# you should build files in local environment then push it to server. I don't know why but build command doesn't work on Ubuntu server.
npm run build
```

## How to add new issues?

1. Go to src/Candidate.vue
2. All information is stored in return value of `data()` function
3. Add new issues to `candidates` attribute.
4. Below lists show what each keywords mean 
    - 'moon' refers to 문재인
    - 'jung' refers to 안희정
    - 'lee' refers to 이재명
    - 'ahn' refers to 안철수
    - 'nam' refers to 남경필
    - 'you' refers to 유승민
    - 'sim' refers to 심상정
    - 'job' refers to 일자리
    - 'university' refers to 대학/등록금
    - 'rent' refers to 주거
    - 'military' refers to 군대
    - 'women' refers to 결혼/출산/육아
5. **Must** follow the format
    - 'summary' | string
    - 'description' | string
    - 'where' | string
    - 'type' | string
    - 'links' | object (key: you can use any key. It doesn't contain any meaning. url: string)