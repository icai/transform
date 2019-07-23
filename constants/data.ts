export const json = JSON.stringify(
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  null,
  2
);

export const html = `<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>`;

export const svg = `<svg style="flex:1;" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100"
    style="stroke:#ff0000; fill: #0000ff"/>
</svg>`;

export const css = `.main-wrapper {
  flex-direction: row;
  display: flex;
  flex: 1;
}
#content {
  flex: 1;
}
ul {
  padding: 20px 0;
  flex: 1;
}
li {
  font-family:'Lato';
  color: whitesmoke;
  line-height: 44px;
}
`;

export const javascript = `const container = css({
  flex: 1,
  padding: 10,
  backgroundColor: 'orange',
  color: colors.white,

  '&:hover': {
    backgroundColor: 'tomato',
  },
});`;

export const yaml = `---
  foo: "bar"
  baz:
    - "qux"
    - "quxx"
  corge: null
  grault: 1
  garply: true
  waldo: "false"
  fred: "undefined"
  emptyarr: []
  emptyobj: {}
`;

export const xml = `<note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
</note>
`;

export const markdown = `Heading
=======
## Sub-heading
Paragraphs are separated
by a blank line.
Two spaces at the end of a line
produces a line break.
Text attributes _italic_,
**bold**, \`monospace\`.
Horizontal rule:
---
Bullet list:
  * apples
  * oranges
  * pears
Numbered list:
  1. wash
  2. rinse
  3. repeat
A [link](http://example.com).
![Image](https://via.placeholder.com/150)
> Markdown uses email-style > characters for blockquoting.
`;

export const flow = `export type AlertType = 'success'

export type AlertProps = {
  type: AlertType,
  text: string,
  testId: string,
}

type AlertTypeIconMap = {
  +[AlertType]: IconType,
}

const Alert = ({ type, text, testId }: AlertProps) => {
  const alertTypeIconMap: AlertTypeIconMap = {
    success: 'tick',
  }
  const styles = getStyles({ type })

  return (
      <View style={styles.iconContainer}>
        <Icon type={alertTypeIconMap[type]} />
      </View>
  )
}

export default Alert`;

export const graphql = `type Query {
	user: User!
}
type User {
	id: ID!
	profile: Profile!
	email: String!
	username: String!
}
type Profile {
	name: String!
	age: Int!
}`;

export const graphql1 = `scalar Date

schema {
  query: Query
}

type Query {
  me: User!
  user(id: ID!): User
  allUsers: [User]
  search(term: String!): [SearchResult!]!
  myChats: [Chat!]!
}

enum Role {
  USER,
  ADMIN,
}

interface Node {
  id: ID!
}

union SearchResult = User | Chat | ChatMessage

type User implements Node {
  id: ID!
  username: String!
  email: String!
  role: Role!
}

type Chat implements Node {
  id: ID!
  users: [User!]!
  messages: [ChatMessage!]!
}

type ChatMessage implements Node {
  id: ID!
  content: String!
  time: Date!
  user: User!
}
`;

export const graphqlDocument = `query findUser($userId: ID!) {
  user(id: $userId) {
    ...UserFields
  }
}

fragment UserFields on User {
  id
  username
  role
}`;

export const graphqlMongodb = `type User @entity {
  id: ID! @id
  username: String! @column
  email: String! @column @map(
    path: "login.email"
  )
  profile: Profile! @column
  chats: [Chat!]! @link
}

type Profile @entity(embedded: true, 
  additionalFields: [
    { path: "dateOfBirth", type: "string" }
  ]) {
  name: String! @column
  age: Int
}

type Chat @entity {
  id: ID! @id
  users: [User!]! @link
  messages: [ChatMessage!]!
}

type ChatMessage @entity {
  id: ID! @id
  chat: Chat! @link
  content: String! @column
  author: User! @link
}`;

export const jsObject = `{
	title: {
		type: 'String',
		trim: true,
		index: true,
		required: true
	},
	year: {
		type: 'Number',
		max: 2012,
		validate: 'validateBookYear'
	},
	author: {
		type: 'ObjectId',
		ref: 'Author',
		index: true,
		required: true
	}
}`;

export const jsonSchema = `{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Example Schema",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "age": {
      "description": "Age in years",
      "type": "integer",
      "minimum": 0
    },
    "height": {
      "type": ["number", "null"]
    },
    "favoriteFoods": {
      "type": "array",
      "minItems": 0,
      "maxItems": 2,
      "items": {
        "type": "string"
      }
    },
    "likesDogs": {
      "type": "boolean"
    }
  },
  "required": ["firstName", "lastName"]
}`;

export const obfuscate = `
var _0x7611 = [\n  \"\\x53\\x61\\x79\\x48\\x65\\x6C\\x6C\\x6F\",\n  \"\\x47\\x65\\x74\\x43\\x6F\\x75\\x6E\\x74\",\n  \"\\x4D\\x65\\x73\\x73\\x61\\x67\\x65\\x20\\x3A\\x20\",\n  \"\\x59\\x6F\\x75\\x20\\x61\\x72\\x65\\x20\\x77\\x65\\x6C\\x63\\x6F\\x6D\\x65\\x2E\"\n];\nfunction NewObject(_0xd8b5x2) {\n  var _0xd8b5x3 = 0;\n  this[_0x7611[0]] = function(_0xd8b5x4) {\n    _0xd8b5x3++;\n    alert(_0xd8b5x2 + _0xd8b5x4);\n  };\n  this[_0x7611[1]] = function() {\n    return _0xd8b5x3;\n  };\n}\nvar obj = new NewObject(_0x7611[2]);\nobj.SayHello(_0x7611[3]);\n
`;

export const jsonLd = `{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Jane Doe",
  "jobTitle": "Professor",
  "telephone": "(425) 123-4567",
  "url": "http://www.janedoe.com"
}
`;

export const jsonLdContext = `{
  "@context": "https://schema.org/"
}`;
