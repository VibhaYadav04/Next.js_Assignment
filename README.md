# Assignment: Build and Test a Blog Viewer

## Objective:
Implement a simple blog post viewer in Next.js using getStaticProps or getServerSideProps, and write unit tests for the components involved.

## Requirements:
1. API Endpoint:
- Create a simple API route (/api/posts) that returns a list of blog posts in JSON format.
2. Page with Data Fetching:
- Create a /posts page that fetches the blog post data from the API using getStaticProps or getServerSideProps.
- Display a list of blog post titles.
- On click, show the full content (either on the same page or in a modal).
3. Component Structure:
- Extract a PostList component to render the list.
- Create a PostDetail component to show post content.
4. Testing:
- Write unit tests for the PostList and PostDetail components using Jest and React Testing Library.
- Mock the API response and test that the posts render correctly.
- Test the data fetching logic separately by mocking the context passed to getStaticProps/getServerSideProps.

Bonus:

Add a loading/fallback UI.

Use jest --coverage to generate a test coverage report.
## Screenshorts
1. Posts
![1 post](https://github.com/user-attachments/assets/55f47bcd-9432-43c1-9693-fc5bcd09cf1e)
2. Open Post
![2 open post](https://github.com/user-attachments/assets/9adffc74-d5d0-465a-a2bb-55728474441d)
3. JSON Format while hitting /api/posts
![3 json ](https://github.com/user-attachments/assets/8255ea53-a861-4bc1-bc38-36ed3047e915)
