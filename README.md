# boj-automation

<https://www.acmicpc.net/>

- testcase checker
- auto submitter

> This project was created using `bun init` in bun v1.0.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## How to use

### Create .env

```shell
BOJ_USERNAME=your_boj_username
BOJ_PASSWORD=your_boj_password
```

### Install packages

```shell
$ bun i
```

### Execute checker

```shell
$ bun check 14681 14681.js
```

```text
[BOJ #14681]
====================
#1 Correct ✅
#2 Correct ✅
```

### Execute submitter

```shell
$ bun submit 14681 14681.js
```

```text
[BOJ #14681]
====================
login success
submit success
채점 중
채점 중
채점 중
채점 중 (5%)
채점 중 (5%)
채점 중 (5%)
채점 중 (10%)
채점 중 (10%)
채점 중 (15%)
채점 중 (15%)
채점 중 (21%)
채점 중 (21%)
채점 중 (26%)
채점 중 (26%)
채점 중 (31%)
채점 중 (34%)
채점 중 (36%)
채점 중 (42%)
채점 중 (42%)
채점 중 (42%)
채점 중 (47%)
채점 중 (52%)
채점 중 (52%)
채점 중 (52%)
채점 중 (57%)
채점 중 (63%)
채점 중 (63%)
채점 중 (68%)
채점 중 (68%)
채점 중 (71%)
채점 중 (73%)
채점 중 (78%)
채점 중 (78%)
채점 중 (84%)
채점 중 (84%)
채점 중 (89%)
채점 중 (89%)
채점 중 (94%)
채점 중 (94%)
채점 중 (97%)
채점 중 (97%)
채점 중 (97%)
맞았습니다!!
```

## Stack

- typescript
- bun
- checker : axios & cheerio (web scrapping)
- submitter : puppteer (web crawling)

## Precaution

- 귀찮아서 언어 설정은 안 만들었습니다. 기본 언어를 미리 `Node.js`로 설정해주세요.
- 귀찮아서 `.js`만 일단 만들었습니다.
- 로그인할 때 Recaptcha 나오면 푸셔야 다음 단계로 넘어갑니다.

## Troubleshooting

- m1에서 Chrome 실행이 안돼요. <https://curryyou.tistory.com/504>
