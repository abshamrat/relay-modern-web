/**
 * @flow
 * @relayHash 7e773c2680ed294712dbaeffdd1d06e3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePostInput = {|
  title?: ?string,
  content?: ?string,
|};
export type createPostMutationVariables = {|
  input: CreatePostInput
|};
export type createPostMutationResponse = {|
  +createPost: ?{|
    +title: ?string,
    +content: ?string,
  |}
|};
export type createPostMutation = {|
  variables: createPostMutationVariables,
  response: createPostMutationResponse,
|};
*/


/*
mutation createPostMutation(
  $input: CreatePostInput!
) {
  createPost(createPostInput: $input) {
    title
    content
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreatePostInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createPost",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "createPostInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Post",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "createPostMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "createPostMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "createPostMutation",
    "id": null,
    "text": "mutation createPostMutation(\n  $input: CreatePostInput!\n) {\n  createPost(createPostInput: $input) {\n    title\n    content\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ebb05814e7fe10839dc87a68441601e3';
module.exports = node;
