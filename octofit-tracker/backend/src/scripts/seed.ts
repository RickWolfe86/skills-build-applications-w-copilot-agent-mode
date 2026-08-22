import mongoose from 'mongoose';
import { connectDatabase } from '../config/database.js';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();
    await Promise.all([User.deleteMany({}), Team.deleteMany({}), Activity.deleteMany({}), Leaderboard.deleteMany({}), Workout.deleteMany({})]);

    const teams = await Team.insertMany([
      { name: 'Trailblazers', coach: 'Maya Chen', goal: 'Build consistent endurance' },
      { name: 'Summit Crew', coach: 'Jordan Ellis', goal: 'Improve strength and mobility' },
    ]);
    const users = await User.insertMany([
      { name: 'Alex Rivera', email: 'alex@example.com', fitnessLevel: 'Intermediate', team: teams[0]._id },
      { name: 'Sam Okafor', email: 'sam@example.com', fitnessLevel: 'Beginner', team: teams[1]._id },
      { name: 'Taylor Morgan', email: 'taylor@example.com', fitnessLevel: 'Advanced', team: teams[0]._id },
    ]);
    await Activity.insertMany([
      { user: users[0]._id, type: 'Running', durationMinutes: 35, calories: 410, completedAt: new Date('2026-08-18') },
      { user: users[1]._id, type: 'Cycling', durationMinutes: 42, calories: 360, completedAt: new Date('2026-08-19') },
      { user: users[2]._id, type: 'Strength training', durationMinutes: 50, calories: 290, completedAt: new Date('2026-08-20') },
    ]);
    await Leaderboard.insertMany([
      { user: users[2]._id, points: 980, rank: 1, period: 'August 2026' },
      { user: users[0]._id, points: 760, rank: 2, period: 'August 2026' },
      { user: users[1]._id, points: 540, rank: 3, period: 'August 2026' },
    ]);
    await Workout.insertMany([
      { name: 'Morning Momentum', focus: 'Cardio', difficulty: 'Moderate', durationMinutes: 30, exercises: ['Jogging', 'High knees', 'Walking lunges'] },
      { name: 'Core and Control', focus: 'Core', difficulty: 'Beginner', durationMinutes: 20, exercises: ['Dead bug', 'Bird dog', 'Plank'] },
      { name: 'Full Body Builder', focus: 'Strength', difficulty: 'Advanced', durationMinutes: 45, exercises: ['Squats', 'Push-ups', 'Rows', 'Mountain climbers'] },
    ]);

    console.log('Seed the octofit_db database with test data');
    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
