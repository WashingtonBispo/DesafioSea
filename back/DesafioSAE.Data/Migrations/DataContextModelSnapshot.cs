﻿// <auto-generated />
using System;
using DesafioSEA.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace DesafioSEA.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.15")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("DesafioSEA.Domain.Entities.StoryEntity", b =>
                {
                    b.Property<string>("IdStory")
                        .HasColumnType("text");

                    b.Property<string>("AuthorEmail")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("StoryText")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("IdStory");

                    b.HasIndex("AuthorEmail");

                    b.ToTable("Story", (string)null);
                });

            modelBuilder.Entity("DesafioSEA.Domain.Entities.UserEntity", b =>
                {
                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<bool>("isAdmin")
                        .HasColumnType("boolean");

                    b.HasKey("Email");

                    b.ToTable("User", (string)null);
                });

            modelBuilder.Entity("StoryEntityUserEntity", b =>
                {
                    b.Property<string>("LikesEmail")
                        .HasColumnType("text");

                    b.Property<string>("LikesIdStory")
                        .HasColumnType("text");

                    b.HasKey("LikesEmail", "LikesIdStory");

                    b.HasIndex("LikesIdStory");

                    b.ToTable("StoryEntityUserEntity");
                });

            modelBuilder.Entity("DesafioSEA.Domain.Entities.StoryEntity", b =>
                {
                    b.HasOne("DesafioSEA.Domain.Entities.UserEntity", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorEmail")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Author");
                });

            modelBuilder.Entity("StoryEntityUserEntity", b =>
                {
                    b.HasOne("DesafioSEA.Domain.Entities.UserEntity", null)
                        .WithMany()
                        .HasForeignKey("LikesEmail")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DesafioSEA.Domain.Entities.StoryEntity", null)
                        .WithMany()
                        .HasForeignKey("LikesIdStory")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
