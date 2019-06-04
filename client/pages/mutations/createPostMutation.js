import {
    commitMutation,
    graphql,
  } from 'react-relay'
import environment from '../../utils/relayEnvironment';

const mutation = graphql`
  mutation createPostMutation($input: CreatePostInput!) {
    createPost(createPostInput: $input) {
        title
        content
    }
  }
` 

export default (title, content, callback) => {

  const variables = {
    input: {
        title,
        content
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        console.log('-----onCompleted------');
        callback();
      },
      onError: (err) => {
        console.error(err)
      },
    },
  )
}
