#EIC Helper
- This tool can:
  - validate EIC code
  - generate valid EIC code
- Thanks to https://github.com/sigod/eic

#Usage
```
node main.js <string>
node main.js <string> <auto_indent_char>
``` 

#Examples nodejs
```
node main.js TEST -> TESTXXXXXXXXXXXC
node main.js TEST Y -> TESTYYYYYYYYYYY9
node main.js TEST11111111111 -> TEST11111111111Y
node main.js TEST11111111111Y9999999 -> trimmed to TEST11111111111Y
```

#Examples Docker
```
docker run --rm devopsmanagereu/eic-helper test -> TESTXXXXXXXXXXXC
```
