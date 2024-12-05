export default interface HeaderProps {
  location?: "train" | "default" | "success"; // Возможные значения для `location`
  text?: false | 'default';
  findForm?: false | true;
}