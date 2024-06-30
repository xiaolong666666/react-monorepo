# Flow

## 备份

|            | step1     | step2      | step3     | step4  |
| ---------- | --------- | ---------- | --------- | ------ |
| components |           |            |           |        |
|            | checkForm | backUpForm | basicInfo | result |
|            | preForm   | limitForm  |           |        |
| operations |           |            |           |        |
|            | next      | prev       | prev      | goback |
|            | cancel    | next       | next      |        |
|            |           | cancel     | cancel    |        |

## 扩容

|            | step1   | step2         | step3     | step4  |
| ---------- | ------- | ------------- | --------- | ------ |
| components |         |               |           |        |
|            | preForm | scalingUpForm | basicInfo | result |
|            |         | limitForm     |           |        |
| operations |         |               |           |        |
|            | next    | prev          | prev      | goback |
|            | cancel  | next          | next      |        |
|            |         | cancel        | cancel    |        |

## 用户权限配置

|            | step1     | step2        | step3    | step4  |
| ---------- | --------- | ------------ | -------- | ------ |
| components |           |              |          |        |
|            | checkForm | userAuthForm | userInfo | result |
|            | preForm   | limitForm    |          |        |
| operations |           |              |          |        |
|            | next      | prev         | prev     | goback |
|            | cancel    | next         | next     |        |
|            |           | cancel       | cancel   |        |
