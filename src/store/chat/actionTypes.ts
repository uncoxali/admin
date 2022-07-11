export enum ChatTypes {
    /* CHATS */
    GET_CHATS = '@@chat/GET_CHATS',
    GET_CHATS_SUCCESS = '@@chat/GET_CHATS_SUCCESS',
    GET_CHATS_FAIL = '@@chat/GET_CHATS_FAIL',

    /* GROUPS */
    GET_GROUPS = '@@chat/GET_GROUPS',
    GET_GROUPS_SUCCESS = '@@chat/GET_GROUPS_SUCCESS',
    GET_GROUPS_FAIL = '@@chat/GET_GROUPS_FAIL',

    /* CONTACTS */
    GET_CONTACTS = '@@chat/GET_CONTACTS',
    GET_CONTACTS_SUCCESS = '@@chat/GET_CONTACTS_SUCCESS',
    GET_CONTACTS_FAIL = '@@chat/GET_CONTACTS_FAIL',

    /* MESSAGES */
    GET_MESSAGES = '@@chat/GET_MESSAGES',
    GET_MESSAGES_SUCCESS = '@@chat/GET_MESSAGES_SUCCESS',
    GET_MESSAGES_FAIL = '@@chat/GET_MESSAGES_FAIL',

    POST_ADD_MESSAGE = '@@chat/POST_ADD_MESSAGE',
    POST_ADD_MESSAGE_SUCCESS = '@@chat/POST_ADD_MESSAGE_SUCCESS',
    POST_ADD_MESSAGE_FAIL = '@@chat/POST_ADD_MESSAGE_FAIL',
 }

 export interface ChatState {
    chats  : Array<any>;
    groups : Array<any>;
    contacts :  Array<any>;
    messages :  Array<any>;
    error : Object
 }

