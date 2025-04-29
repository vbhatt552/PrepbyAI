import React from 'react'
import { FormControl,FormLabel,FormDescription,FormItem,FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
export const FormField = () => ( <FormField
    control={form.control}
    name="username"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="shadcn" {...field} />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />)
