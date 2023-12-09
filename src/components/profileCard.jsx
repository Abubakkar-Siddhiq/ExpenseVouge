import { useGetUserInfo } from '../hooks/useGetUserInfo';
import { useLogin } from '../hooks/useLogin';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import React from 'react'
  
 function UserNav() {
    const { name, email, profilePhoto } = useGetUserInfo()
    const { logOut } = useLogin()
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8">
            <Avatar className={profilePhoto === null ? "h-10 w-10 rounded-full" : "h-10 w-10 rounded-full my-auto"}>
              <AvatarImage src={profilePhoto} alt={name} />
              <AvatarFallback>{name === null ? '😃' : name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Hi, {name}!</p>
              <p className="text-xs leading-none text-muted-foreground">{email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logOut} className='cursor-pointer hover:bg-gray-200'>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

export default UserNav