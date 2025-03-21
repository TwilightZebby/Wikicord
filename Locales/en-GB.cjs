module.exports = {

    // ******* GENERIC STUFF
    DELETE: `Delete`,
    CANCEL: `Cancel`,
    JUMP_TO_SOURCE_MESSAGE: `Jump to source Message`,

    ERROR_GENERIC: `An error has occurred.`,
    ERROR_GENERIC_WITH_PREVIEW: `An error has occurred. A preview of the raw error is as follows:\n\`\`\`{{0}}\`\`\``,



    // ******* GENERIC SLASH COMMAND STUFF
    SLASH_COMMAND_ERROR_GENERIC: `Sorry, but there was a problem trying to run this Slash Command...`,

    SLASH_COMMAND_ERROR_COOLDOWN_SECONDS: `Please wait {{0}} more seconds before using this Slash Command again.`,
    SLASH_COMMAND_ERROR_COOLDOWN_MINUTES: `Please wait {{0}} more minutes before using this Slash Command again.`,
    SLASH_COMMAND_ERROR_COOLDOWN_HOURS: `Please wait {{0}} more hours before using this Slash Command again.`,
    SLASH_COMMAND_ERROR_COOLDOWN_DAYS: `Please wait {{0}} more days before using this Slash Command again.`,
    SLASH_COMMAND_ERROR_COOLDOWN_MONTHS: `Please wait {{0}} more months before using this Slash Command again.`,



    // ******* GENERIC CONTEXT COMMAND STUFF
    CONTEXT_COMMAND_ERROR_GENERIC: `Sorry, an error occurred while trying to run this Context Command...`,
    CONTEXT_COMMAND_ERROR_SYSTEM_AND_BOT_MESSAGES_UNSUPPORTED: `Sorry, but this Context Command cannot be used on a System or Bot Message.`,
    CONTEXT_COMMAND_ERROR_MISSING_CONTENT: `Sorry, but that Message doesn't have any content! (Attachments aren't checked by this Context Command).`,

    CONTEXT_COMMAND_ERROR_COOLDOWN_SECONDS: `Please wait {{0}} more seconds before using this Context Command again.`,
    CONTEXT_COMMAND_ERROR_COOLDOWN_MINUTES: `Please wait {{0}} more minutes before using this Context Command again.`,
    CONTEXT_COMMAND_ERROR_COOLDOWN_HOURS: `Please wait {{0}} more hours before using this Context Command again.`,
    CONTEXT_COMMAND_ERROR_COOLDOWN_DAYS: `Please wait {{0}} more days before using this Context Command again.`,
    CONTEXT_COMMAND_ERROR_COOLDOWN_MONTHS: `Please wait {{0}} more months before using this Context Command again.`,



    // ******* GENERIC BUTTON STUFF
    BUTTON_ERROR_GENERIC: `An error occurred while trying to process that Button press...`,

    BUTTON_ERROR_COOLDOWN_SECONDS: `Please wait {{0}} more seconds before using this Button again.`,
    BUTTON_ERROR_COOLDOWN_MINUTES: `Please wait {{0}} more minutes before using this Button again.`,
    BUTTON_ERROR_COOLDOWN_HOURS: `Please wait {{0}} more hours before using this Button again.`,
    BUTTON_ERROR_COOLDOWN_DAYS: `Please wait {{0}} more days before using this Button again.`,
    BUTTON_ERROR_COOLDOWN_MONTHS: `Please wait {{0}} more months before using this Button again.`,



    // ******* GENERIC SELECT MENU STUFF
    SELECT_ERROR_GENERIC: `An error occurred while trying to process that Select Menu choice...`,

    SELECT_ERROR_COOLDOWN_SECONDS: `Please wait {{0}} more seconds before using this Select Menu again.`,
    SELECT_ERROR_COOLDOWN_MINUTES: `Please wait {{0}} more minutes before using this Select Menu again.`,
    SELECT_ERROR_COOLDOWN_HOURS: `Please wait {{0}} more hours before using this Select Menu again.`,
    SELECT_ERROR_COOLDOWN_DAYS: `Please wait {{0}} more days before using this Select Menu again.`,
    SELECT_ERROR_COOLDOWN_MONTHS: `Please wait {{0}} more months before using this Select Menu again.`,



    // ******* GENERIC MODAL STUFF
    MODAL_ERROR_GENERIC: `An error occurred while trying to process that Modal submission...`,



    // ******* GENERIC AUTOCOMPLETE STUFF
    AUTOCOMPLETE_ERROR_GENERIC: `Error: Unable to process.`,



    // ******* ADD APP COMMAND
    ADD_APP_COMMAND_RESPONSE: `Use the below link to add Wikicord to either your Server or your Profile!\n\n[Add Wikicord]( {{0}} )`,

    
    
    // ******* SUPPORT COMMAND
    SUPPORT_COMMAND_RESPONSE: `Need help/support with using Wikicord? Or maybe you want to report an issue or suggest an idea for Wikicord?\nFeel free to ask/post on the Issues or Discussions tab of Wikicord's GitHub (linked below).`,
    SUPPORT_COMMAND_BUTTON_GITHUB_LABEL: `Open GitHub`,



    // ******* SUBSCRIBE COMMAND
    NEWS_SUBSCRIBE_COMMAND_SUCCESS: `Successfully followed this Channel ( {{0}} ) to Wikicord's Announcements Feed!\n\nYou can edit and/or unfollow this Feed at any time by going into **Server Settings > Integrations > Channels Followed**.`,

    NEWS_SUBSCRIBE_COMMAND_ERROR_MISSING_PERMISSION_VIEW_CHANNEL: `Sorry, Wikicord needs the "**View Channel**" Permission in this Channel to be able to follow its Announcements Feed here.`,
    NEWS_SUBSCRIBE_COMMAND_ERROR_MISSING_PERMISSION_MANAGE_WEBHOOKS: `Sorry, Wikicord needs the "**Manage Webhooks**" Permission in this Channel to be able to follow its Announcements Feed here.\n\n*(This Permission can be revoked from Wikicord again afterwards)*`,
    NEWS_SUBSCRIBE_COMMAND_ERROR_NOT_A_TEXT_CHANNEL: `Sorry, you can only follow a regular Text Channel to Wikicord's Announcements Feed.\nPlease try using this Channel again in a Text Channel.`,
    NEWS_SUBSCRIBE_COMMAND_ERROR_GENERIC: `Sorry, something went wrong while trying to follow this Channel to Wikicord's Announcements Feed.`,
}
