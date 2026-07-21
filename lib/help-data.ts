export interface HelpArticle {
  id: string
  title: string
  category: string
  slug: string
  content: string
  shortDescription: string
}

export const helpArticles: HelpArticle[] = [
  {
    id: "1",
    title: "Getting Started with Sagent",
    category: "Getting Started",
    slug: "getting-started",
    shortDescription: "Download Sagent and create your first message template",
    content: `Getting started with Sagent is simple:

1. Download Sagent from Google Play or the App Store
2. Open the app - no account or sign-in required
3. Explore the pre-loaded Sales and Support message templates
4. Tap any message to preview it
5. Create your first template by tapping "Add Message"
6. Name your template and enter your message
7. Organize into folders for easy access

That's it! You're ready to start sending faster.`,
  },
  {
    id: "2",
    title: "How to Send a Message",
    category: "Usage",
    slug: "how-to-send",
    shortDescription: "Send a saved message to any app on your phone",
    content: `Sending a message with Sagent takes just two taps:

1. Find the message you want to send
2. Tap the message card
3. Your device's share sheet appears
4. Select the app you want to send to (WhatsApp, Gmail, SMS, etc.)
5. The message appears in the compose field
6. Edit if needed, then send

You can send to:
- WhatsApp
- Email (Gmail, Outlook, etc.)
- SMS text messages
- LinkedIn
- Telegram
- iMessage
- Any messaging app that accepts shared text`,
  },
  {
    id: "3",
    title: "Creating and Managing Templates",
    category: "Templates",
    slug: "creating-templates",
    shortDescription: "Save and organize your message templates",
    content: `Create templates for messages you send regularly:

Creating a Template:
1. Tap the + button to add a new message
2. Enter a memorable name (e.g., "Cold Outreach", "Follow-up")
3. Type your message content
4. Add to a folder for organization
5. Tap Save

Tips for Better Templates:
- Use variables like [NAME] and [COMPANY] for personalization
- Keep messages concise but compelling
- Test before adding to your library
- Review and update templates quarterly

Managing Templates:
- Swipe left to edit or delete
- Use search to find messages quickly
- Drag and drop to reorganize folders`,
  },
  {
    id: "4",
    title: "Organizing with Folders",
    category: "Organization",
    slug: "organizing-with-folders",
    shortDescription: "Keep your messages organized with folders",
    content: `Folders help you categorize messages by context, client, or campaign.

Creating Folders:
1. Tap "New Folder" in the main view
2. Name your folder
3. Choose an emoji or icon
4. Add messages by tapping and holding a message, then dragging to the folder

Best Practices:
- Create folders for each client or campaign
- Use subfolders for different stages (Discovery, Follow-up, Close)
- Archive old campaigns to keep your library clean`,
  },
  {
    id: "5",
    title: "Upgrading to Pro",
    category: "Billing",
    slug: "upgrading-to-pro",
    shortDescription: "Unlock unlimited sends and premium features",
    content: `Sagent Pro gives you unlimited sends, custom branding, and priority support.

Pro Features:
- Unlimited message sends per month
- Custom folder icons and branding
- Advanced analytics and insights
- Priority support
- Early access to new features

Upgrading:
1. Go to Settings > Subscription
2. Choose Monthly or Yearly plan
3. Complete payment through Google Play or App Store
4. Pro features unlock immediately

All subscriptions are managed through your app store account.`,
  },
]
