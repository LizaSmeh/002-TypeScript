# Домашнее задание к занятию «1.2. Система типов TypeScript. Принципы ООП. SOLID»

**Правила выполнения домашней работы:**  
* Выполняйте домашнее задание в отдельной ветке проекта на GitHub.  
* В поле для сдачи работы прикрепите ссылку на ваш проект в Git.  
* На проверку можно отправить как все задачи вместе, так и каждую задачу по отдельности.  
* Во время проверки вашей домашней работы по частям будет стоять статус «На доработке».  
* Любые вопросы по решению задач можете задавать в чате учебной группы.

---

### Подготовьте рабочую среду для дальнейшей работы.

#### 1. Напишите интерфейс к сущности «Книга» для разрабатываемого приложения «Библиотека» из модуля NDSE «Настройка окружения и Express.js».  
На протяжении нескольких занятий мы будем поэтапно переписывать наш проект на TypeScript. Цель этого задания — только создание интерфейса без переписывания логики существующего приложения.

---

#### 2. Включите строгий режим (`strict`) в опциях компилятора, а параметр `strictNullChecks` выключите.

<details>
<summary>Что вы должны увидеть после выполнения шага:</summary>

![](../002-TypeScript/step1.png)

</details>

---

#### 3. Напишите абстрактный класс `BooksRepository` для разрабатываемого приложения «Библиотека» из первого модуля.  
На данном этапе мы не будем его применять — цель этого задания заключается в создании первого абстрактного класса.

<details>
<summary>Методы, которые должны быть в `BooksRepository`:</summary>

1. `createBook(book: Book): void` — создание книги.  
2. `getBook(id: number): Book | null` — получение книги по ID.  
3. `getBooks(): Book[]` — получение всех книг.  
4. `updateBook(id: number, updatedBook: Book): void` — обновление книги.  
5. `deleteBook(id: number): void` — удаление книги.

</details>