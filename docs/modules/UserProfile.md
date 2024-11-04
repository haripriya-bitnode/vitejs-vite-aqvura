[vite-react-typescript-starter](../README.md) / [Modules](../modules.md) / UserProfile

# Module: UserProfile

## Table of contents

### Functions

- [UserProfile](UserProfile.md#userprofile)

## Functions

### UserProfile

▸ **UserProfile**(`props`, `deprecatedLegacyContext?`): `ReactNode`

Displays user profile information in a card format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `UserProfileProps` | - |
| `deprecatedLegacyContext?` | `any` | **`Deprecated`** **`See`** [React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods) |

#### Returns

`ReactNode`

**`Component`**

**`Example`**

```tsx
<UserProfile
  name="John Doe"
  avatarUrl="/avatars/john.jpg"
  role="admin"
/>
```

#### Defined in

src/UserProfile.tsx:23
