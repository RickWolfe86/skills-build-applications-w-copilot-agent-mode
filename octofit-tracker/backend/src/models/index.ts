import mongoose, { type Model } from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  fitnessLevel: { type: String, required: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
});

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  coach: { type: String, required: true },
  goal: { type: String, required: true },
});

const activitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  calories: { type: Number, required: true },
  completedAt: { type: Date, required: true },
});

const leaderboardSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  points: { type: Number, required: true },
  rank: { type: Number, required: true },
  period: { type: String, required: true },
});

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  focus: { type: String, required: true },
  difficulty: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  exercises: { type: [String], required: true },
});

export const User = (mongoose.models.User || mongoose.model('User', userSchema)) as Model<Record<string, unknown>>;
export const Team = (mongoose.models.Team || mongoose.model('Team', teamSchema)) as Model<Record<string, unknown>>;
export const Activity = (mongoose.models.Activity || mongoose.model('Activity', activitySchema)) as Model<Record<string, unknown>>;
export const Leaderboard = (mongoose.models.Leaderboard || mongoose.model('Leaderboard', leaderboardSchema)) as Model<Record<string, unknown>>;
export const Workout = (mongoose.models.Workout || mongoose.model('Workout', workoutSchema)) as Model<Record<string, unknown>>;