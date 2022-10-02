import { mutationWithClientMutationId } from 'graphql-relay';
import { Feed, FeedModel } from '../models/model'
import { FeedType, FeedInputType } from '../models/types';

export const FeedCreate = mutationWithClientMutationId({
  name: 'FeedCreate',
  inputFields: {
   ...FeedInputType
  },
  outputFields: {
    feed: {
        type: FeedType,
        resolve: response => response.feed
    }
  },
  mutateAndGetPayload: async({ ...feed }: Feed, ctx) => {
    try {
      const document = new FeedModel({ ...feed }).save()
      return {
        feed: document
      }
    } catch {
      throw new Error('Invalid feed')
    }
  }
});