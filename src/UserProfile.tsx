// Example component showing required documentation pattern
interface UserProfileProps {
  /** User's full name */
  name: string;
  /** URL to user's avatar image */
  avatarUrl: string;
  /** Role of the user in the system */
  role: 'admin' | 'user' | 'guest';
}

/**
 * Displays user profile information in a card format.
 * @component
 * @example
 * ```tsx
 * <UserProfile
 *   name="John Doe"
 *   avatarUrl="/avatars/john.jpg"
 *   role="admin"
 * />
 * ```
 */
export const UserProfile: React.FC<UserProfileProps> = ({
  name,
  avatarUrl,
  role,
}) => {
  return (
    <div className="user-profile">
      <img src={avatarUrl} alt={`${name}'s avatar`} />
      <h3>{name}</h3>
      <span>{role}</span>
    </div>
  );
};
