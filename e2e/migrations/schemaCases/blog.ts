import blogSchema from '@src/api/schema/examples/blog'
import { ExpectedSchemaCase } from '../cases'

const cases: ExpectedSchemaCase = {
  schema: blogSchema,
  tableColumns: {
    snakePlural: {
      SequelizeMeta: ['name'],
      categories: [
        'content',
        'created_at',
        'id',
        'meta_title',
        'parent_id',
        'slug',
        'title',
        'updated_at',
      ],
      posts: [
        'author_id',
        'content',
        'created_at',
        'id',
        'meta_title',
        'parent_id',
        'published',
        'published_at',
        'slug',
        'summary',
        'title',
        'updated_at',
      ],
      post_categories: ['category_id', 'created_at', 'id', 'post_id', 'updated_at'],
      post_comments: [
        'content',
        'created_at',
        'id',
        'parent_id',
        'post_id',
        'published',
        'published_at',
        'title',
        'updated_at',
      ],
      post_metas: ['content', 'created_at', 'id', 'key', 'post_id', 'updated_at'],
      post_tags: ['created_at', 'id', 'post_id', 'tag_id', 'updated_at'],
      tags: ['content', 'created_at', 'id', 'meta_title', 'slug', 'title', 'updated_at'],
      users: [
        'created_at',
        'email',
        'first_name',
        'id',
        'intro',
        'last_login',
        'last_name',
        'middle_name',
        'mobile',
        'password_hash',
        'profile',
        'registered_at',
        'updated_at',
      ],
    },
    snakeSingular: {
      SequelizeMeta: ['name'],
      category: [
        'content',
        'created_at',
        'id',
        'meta_title',
        'parent_id',
        'slug',
        'title',
        'updated_at',
      ],
      post: [
        'author_id',
        'content',
        'created_at',
        'id',
        'meta_title',
        'parent_id',
        'published',
        'published_at',
        'slug',
        'summary',
        'title',
        'updated_at',
      ],
      post_category: ['category_id', 'created_at', 'id', 'post_id', 'updated_at'],
      post_comment: [
        'content',
        'created_at',
        'id',
        'parent_id',
        'post_id',
        'published',
        'published_at',
        'title',
        'updated_at',
      ],
      post_meta: ['content', 'created_at', 'id', 'key', 'post_id', 'updated_at'],
      post_tag: ['created_at', 'id', 'post_id', 'tag_id', 'updated_at'],
      tag: ['content', 'created_at', 'id', 'meta_title', 'slug', 'title', 'updated_at'],
      user: [
        'created_at',
        'email',
        'first_name',
        'id',
        'intro',
        'last_login',
        'last_name',
        'middle_name',
        'mobile',
        'password_hash',
        'profile',
        'registered_at',
        'updated_at',
      ],
    },
    camelPlural: {
      SequelizeMeta: ['name'],
      Categories: [
        'content',
        'createdAt',
        'id',
        'metaTitle',
        'parentId',
        'slug',
        'title',
        'updatedAt',
      ],
      Posts: [
        'authorId',
        'content',
        'createdAt',
        'id',
        'metaTitle',
        'parentId',
        'published',
        'publishedAt',
        'slug',
        'summary',
        'title',
        'updatedAt',
      ],
      PostCategories: ['categoryId', 'createdAt', 'id', 'postId', 'updatedAt'],
      PostComments: [
        'content',
        'createdAt',
        'id',
        'parentId',
        'postId',
        'published',
        'publishedAt',
        'title',
        'updatedAt',
      ],
      PostMetas: ['content', 'createdAt', 'id', 'key', 'postId', 'updatedAt'],
      PostTags: ['createdAt', 'id', 'postId', 'tagId', 'updatedAt'],
      Tags: ['content', 'createdAt', 'id', 'metaTitle', 'slug', 'title', 'updatedAt'],
      Users: [
        'createdAt',
        'email',
        'firstName',
        'id',
        'intro',
        'lastLogin',
        'lastName',
        'middleName',
        'mobile',
        'passwordHash',
        'profile',
        'registeredAt',
        'updatedAt',
      ],
    },
    camelSingular: {
      SequelizeMeta: ['name'],
      Category: [
        'content',
        'createdAt',
        'id',
        'metaTitle',
        'parentId',
        'slug',
        'title',
        'updatedAt',
      ],
      Post: [
        'authorId',
        'content',
        'createdAt',
        'id',
        'metaTitle',
        'parentId',
        'published',
        'publishedAt',
        'slug',
        'summary',
        'title',
        'updatedAt',
      ],
      PostCategory: ['categoryId', 'createdAt', 'id', 'postId', 'updatedAt'],
      PostComment: [
        'content',
        'createdAt',
        'id',
        'parentId',
        'postId',
        'published',
        'publishedAt',
        'title',
        'updatedAt',
      ],
      PostMeta: ['content', 'createdAt', 'id', 'key', 'postId', 'updatedAt'],
      PostTag: ['createdAt', 'id', 'postId', 'tagId', 'updatedAt'],
      Tag: ['content', 'createdAt', 'id', 'metaTitle', 'slug', 'title', 'updatedAt'],
      User: [
        'createdAt',
        'email',
        'firstName',
        'id',
        'intro',
        'lastLogin',
        'lastName',
        'middleName',
        'mobile',
        'passwordHash',
        'profile',
        'registeredAt',
        'updatedAt',
      ],
    },
    noTimestamps: {
      SequelizeMeta: ['name'],
      categories: ['content', 'id', 'meta_title', 'parent_id', 'slug', 'title'],
      posts: [
        'author_id',
        'content',
        'id',
        'meta_title',
        'parent_id',
        'published',
        'published_at',
        'slug',
        'summary',
        'title',
      ],
      post_categories: ['category_id', 'id', 'post_id'],
      post_comments: [
        'content',
        'id',
        'parent_id',
        'post_id',
        'published',
        'published_at',
        'title',
      ],
      post_metas: ['content', 'id', 'key', 'post_id'],
      post_tags: ['id', 'post_id', 'tag_id'],
      tags: ['content', 'id', 'meta_title', 'slug', 'title'],
      users: [
        'email',
        'first_name',
        'id',
        'intro',
        'last_login',
        'last_name',
        'middle_name',
        'mobile',
        'password_hash',
        'profile',
        'registered_at',
      ],
    },
    prefixPks: {
      SequelizeMeta: ['name'],
      categories: [
        'category_id',
        'content',
        'created_at',
        'meta_title',
        'parent_id',
        'slug',
        'title',
        'updated_at',
      ],
      posts: [
        'author_id',
        'content',
        'created_at',
        'meta_title',
        'parent_id',
        'post_id',
        'published',
        'published_at',
        'slug',
        'summary',
        'title',
        'updated_at',
      ],
      post_categories: ['category_id', 'created_at', 'post_category_id', 'post_id', 'updated_at'],
      post_comments: [
        'content',
        'created_at',
        'parent_id',
        'post_comment_id',
        'post_id',
        'published',
        'published_at',
        'title',
        'updated_at',
      ],
      post_metas: ['content', 'created_at', 'key', 'post_id', 'post_meta_id', 'updated_at'],
      post_tags: ['created_at', 'post_id', 'post_tag_id', 'tag_id', 'updated_at'],
      tags: ['content', 'created_at', 'meta_title', 'slug', 'tag_id', 'title', 'updated_at'],
      users: [
        'created_at',
        'email',
        'first_name',
        'intro',
        'last_login',
        'last_name',
        'middle_name',
        'mobile',
        'password_hash',
        'profile',
        'registered_at',
        'updated_at',
        'user_id',
      ],
    },
  },
}

export default cases
