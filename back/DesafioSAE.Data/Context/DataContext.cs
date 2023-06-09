﻿using DesafioSEA.Data.Mapping;
using DesafioSEA.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesafioSEA.Data.Context
{
    public class DataContext : DbContext
    {
        public DataContext() { }

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=DesafioSEA;Username=postgres;Password=Big_Hurricane81");

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserEntity>(new UserMap().Configure);
            modelBuilder.Entity<StoryEntity>(new StoryMap().Configure);
        }

        public DbSet<UserEntity> User { get; set; }
        public DbSet<StoryEntity> Story { get; set; }
    }
}
