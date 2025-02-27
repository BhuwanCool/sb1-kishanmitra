/*
  # Fix storage permissions

  1. Updates
    - Add storage bucket public access
    - Add additional storage policies for avatar management
*/

-- Enable public access for avatars bucket
UPDATE storage.buckets
SET public = true
WHERE id = 'avatars';

-- Allow users to delete their own avatars
CREATE POLICY "Users can delete own avatars"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Allow users to update their own avatars
CREATE POLICY "Users can update own avatars"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);