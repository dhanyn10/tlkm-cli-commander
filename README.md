# TLKM CLI Commander

### Cara menggunakan
  
- menampilkan petunjuk penggunaan:
    ```bash
    node ./cmd.js -h
    ```
- konversi ke json
    ```bash
    $ node ./cmd.js ./tests/txt/file.txt -t json
    ```

- konversi ke plaintext
    ```bash
    $ node ./cmd.js ./tests/json/file.json
    ```

- konversi ke json dengan custom output
    ```bash
    $ node ./cmd.js ./tests/txt/file.txt -t json -o ./custom/my.json
    ```

- konversi ke text dengan custom output
    ```bash
    $ node ./cmd.js ./tests/txt/file.json -o ./custom/my.txt
    ```